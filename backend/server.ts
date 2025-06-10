import express from 'express';
import hubspotRouter from './routes/hubspot';

const app = express();
app.use(express.json());

// Mount your HubSpot route
app.use(hubspotRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;