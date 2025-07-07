import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_GUID = process.env.HUBSPOT_FORM_GUID;
const HUBSPOT_TOKEN = process.env.HUBSPOT_PRIVATE_TOKEN;

interface QuestionnaireData {
  email: string;
  companyName: string;
  firstName?: string;
  lastName?: string;
  businessStage?: string; // This will store all questionnaire content
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
  }: QuestionnaireData = req.body;

  if (!email || !companyName || !businessStage) {
    return res.status(400).json({ message: 'Email, Company Name, and Business Stage are required' });
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

    if (check.data) {
      const contactId = check.data.id;

      const properties: Record<string, string> = {
        company: companyName,
        business_stage: businessStage, // All questionnaire info goes here
      };

      if (firstName) properties.firstname = firstName;
      if (lastName) properties.lastname = lastName;

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

      return res.status(200).json({ message: 'Existing contact updated' });
    }
  } catch (err: any) {
    if (err.response?.status !== 404) {
      return res.status(500).json({
        message: 'Error checking contact',
        error: err.response?.data || err.message,
      });
    }
  }

  // Step 2: Create contact via HubSpot form
  try {
    const fields = [
      { name: 'email', value: email },
      { name: 'company', value: companyName },
      { name: 'business_stage', value: businessStage },
    ];

    if (firstName) fields.push({ name: 'firstname', value: firstName });
    if (lastName) fields.push({ name: 'lastname', value: lastName });

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
      message: 'New contact submitted via HubSpot form',
      submittedFields: fields.length,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'HubSpot form submission error',
      error: error.response?.data || error.message,
    });
  }
}
