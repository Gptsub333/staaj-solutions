import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const HUBSPOT_PORTAL_ID = '242979819';
const HUBSPOT_FORM_GUID = 'd6d3304e-6a02-4e83-9e67-da83239f8eb9';
const HUBSPOT_TOKEN = process.env.HUBSPOT_PRIVATE_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, companyName } = req.body;

  if (!email || !companyName) {
    return res.status(400).json({ message: 'Email and Company Name are required' });
  }

  try {
    // Step 1: Check if contact exists
    const check = await axios.get(`https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email`, {
      headers: {
        Authorization: `Bearer ${HUBSPOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    // If it exists, return 409
    if (check.data) {
      return res.status(409).json({ message: 'User already exists with this email' });
    }
  } catch (err: any) {
    if (err.response?.status !== 404) {
      // Real error (not just "not found")
      return res.status(500).json({ message: 'Error checking contact', error: err.response?.data || err.message });
    }
    // else: 404 = not found = good → proceed
  }

  // Step 2: Submit the form to HubSpot
  try {
    const response = await axios.post(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
      {
        fields: [
          { name: 'email', value: email },
          { name: 'company', value: companyName },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).json({ message: 'Successfully submitted to HubSpot' });
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      res.status(500).json({ message: 'HubSpot form error', error: error.response?.data || error.message });
    } else {
      res.status(500).json({ message: 'Unknown error' });
    }
  }
}
