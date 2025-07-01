import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const HUBSPOT_PORTAL_ID = '242979819';
const HUBSPOT_FORM_GUID = 'd6d3304e-6a02-4e83-9e67-da83239f8eb9';
const HUBSPOT_TOKEN = process.env.HUBSPOT_PRIVATE_TOKEN;

interface QuestionnaireData {
  email: string;
  companyName: string;
  firstName?: string;
  lastName?: string;
  businessStage?: string;
  mainChallenge?: string;
  helpType?: string;
  teamInfo?: string;
  successVision?: string;
  industry_quest?: string;
  position?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    email,
    companyName,
    firstName,
    lastName,
    businessStage,
    mainChallenge,
    helpType,
    teamInfo,
    successVision,
    industry_quest,
    position,
  }: QuestionnaireData = req.body;

  if (!email || !companyName) {
    return res.status(400).json({ message: 'Email and Company Name are required' });
  }

  const summary = `
Business Stage: ${businessStage || 'N/A'}
Main Challenge: ${mainChallenge || 'N/A'}
Help Type: ${helpType || 'N/A'}
Team Info: ${teamInfo || 'N/A'}
Success Vision: ${successVision || 'N/A'}
Industry: ${industry_quest || 'N/A'}
Position: ${position || 'N/A'}
  `.trim();

  try {
    // Step 1: Check if contact exists
    const check = await axios.get(
      `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email`,
      {
        headers: {
          Authorization: `Bearer ${HUBSPOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (check.data) {
      const contactId = check.data.id;

      // Step 2: Update existing contact
      const properties: Record<string, string> = {
        company: companyName,
        questionnaire_summary: summary,
      };

      if (firstName) properties.firstname = firstName;
      if (lastName) properties.lastname = lastName;
      if (businessStage) properties.business_stage = businessStage;
      if (mainChallenge) properties.main_challenge = mainChallenge;
      if (helpType) properties.help_type = helpType;
      if (teamInfo) properties.team_info = teamInfo;
      if (successVision) properties.success_vision = successVision;
      if (industry_quest) properties.industry_quest = industry_quest;
      if (position) properties.position = position;

      await axios.patch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
        { properties },
        {
          headers: {
            Authorization: `Bearer ${HUBSPOT_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return res.status(200).json({ message: 'Existing contact updated with summary' });
    }
  } catch (err: any) {
    if (err.response?.status !== 404) {
      return res.status(500).json({
        message: 'Error checking contact',
        error: err.response?.data || err.message,
      });
    }
    // If 404 (contact not found), fall through to creation
  }

  // Step 3: Create new contact via form submission
  try {
    const fields = [
      { name: 'email', value: email },
      { name: 'company', value: companyName },
      { name: 'questionnaire_summary', value: summary },
    ];

    if (firstName) fields.push({ name: 'firstname', value: firstName });
    if (lastName) fields.push({ name: 'lastname', value: lastName });
    if (businessStage) fields.push({ name: 'business_stage', value: businessStage });
    if (mainChallenge) fields.push({ name: 'main_challenge', value: mainChallenge });
    if (helpType) fields.push({ name: 'help_type', value: helpType });
    if (teamInfo) fields.push({ name: 'team_info', value: teamInfo });
    if (successVision) fields.push({ name: 'success_vision', value: successVision });
    if (industry_quest) fields.push({ name: 'industry_quest', value: industry_quest });
    if (position) fields.push({ name: 'position', value: position });

    await axios.post(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
      { fields },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).json({
      message: 'New contact submitted via HubSpot form with summary',
      submittedFields: fields.length,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'HubSpot form submission error',
      error: error.response?.data || error.message,
    });
  }
}
