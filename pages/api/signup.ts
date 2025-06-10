import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const HUBSPOT_PORTAL_ID = '242979819';
const HUBSPOT_FORM_GUID = 'd6d3304e-6a02-4e83-9e67-da83239f8eb9';
const HUBSPOT_TOKEN = process.env.HUBSPOT_PRIVATE_TOKEN;

interface QuestionnaireData {
  email: string;
  companyName: string;
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
    businessStage,
    mainChallenge,
    helpType,
    teamInfo,
    successVision,
    industry_quest,
    position 
  }: QuestionnaireData = req.body;

  if (!email || !companyName) {
    return res.status(400).json({ message: 'Email and Company Name are required' });
  }

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

    // If it exists, return 409
    if (check.data) {
  try {
    const contactId = check.data.id;
    console.log(contactId);
    // Build properties object for updating
    const properties: Record<string, string> = {
      company: companyName,
    };

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
    console.log(properties);
    return res.status(200).json({ message: 'Existing user updated in HubSpot' });
  } catch (updateError: any) {
    return res.status(500).json({
      message: 'Failed to update existing contact',
      error: updateError.response?.data || updateError.message,
    });
  }
}

  } catch (err: any) {
    if (err.response?.status !== 404) {
      // Real error (not just "not found")
      return res.status(500).json({ 
        message: 'Error checking contact', 
        error: err.response?.data || err.message 
      });
    }
    // else: 404 = not found = good → proceed
  }

  // Step 2: Submit the form to HubSpot with all questionnaire data
  try {
    // Build fields array - only include fields that have values
    const fields = [
      { name: 'email', value: email },
      { name: 'company', value: companyName },
    ];

    // Add optional questionnaire fields if they exist
    if (businessStage) {
      fields.push({ name: 'business_stage', value: businessStage });
    }
    
    if (mainChallenge) {
      fields.push({ name: 'main_challenge', value: mainChallenge });
    }
    
    if (helpType) {
      fields.push({ name: 'help_type', value: helpType });
    }
    
    if (teamInfo) {
      fields.push({ name: 'team_info', value: teamInfo });
    }
    
    if (successVision) {
      fields.push({ name: 'success_vision', value: successVision });
    }
    
    if (industry_quest) {
      fields.push({ name: 'industry_quest', value: industry_quest });
    }
    
    if (position) {
      fields.push({ name: 'position', value: position });
    }

    const response = await axios.post(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
      {
        fields: fields,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).json({ 
      message: 'Successfully submitted to HubSpot',
      submittedFields: fields.length 
    });
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      res.status(500).json({ 
        message: 'HubSpot form error', 
        error: error.response?.data || error.message 
      });
    } else {
      res.status(500).json({ message: 'Unknown error' });
    }
  }
}