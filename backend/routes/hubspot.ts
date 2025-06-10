// routes/hubspot.ts or controllers/signup.ts
import axios from 'axios';
import express from 'express';

const router = express.Router();

const HUBSPOT_PORTAL_ID = '242979819';
const HUBSPOT_FORM_GUID = 'd6d3304e-6a02-4e83-9e67-da83239f8eb9';

router.post('/api/signup', async (req, res) => {
  const { email, companyName } = req.body;

  try {
    const response = await axios.post(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
      {
        fields: [
          { name: 'email', value: email },
          { name: 'company', value: companyName }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    res.status(200).json({ message: 'Successfully submitted to HubSpot' });
 } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    console.error('HubSpot submission error:', error.response?.data || error.message);
    res.status(500).json({ message: 'Error submitting to HubSpot', error: error.message });
  } else if (error instanceof Error) {
    console.error('Unknown error submitting to HubSpot:', error.message);
    res.status(500).json({ message: 'Unexpected error', error: error.message });
  } else {
    console.error('Unexpected non-error thrown:', error);
    res.status(500).json({ message: 'Unknown error occurred' });
  }
}

});

export default router;
