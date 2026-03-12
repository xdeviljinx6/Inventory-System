import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Very basic authentication check
  const authHeader = req.headers.authorization;
  const expectedPassword = process.env.SYSTEM_PASSWORD || '101010';

  if (!authHeader || authHeader !== `Bearer ${expectedPassword}`) {
      return res.status(401).json({ error: 'Unauthorized. Incorrect password.' });
  }

  try {
    const { inventoryData, transactionHistory, palletCapacities } = req.body;

    const pipeline = redis.pipeline();

    if (inventoryData !== undefined) {
      pipeline.set('cohin_inventoryData', inventoryData);
    }

    if (transactionHistory !== undefined) {
      pipeline.set('cohin_transactionHistory', transactionHistory);
    }

    if (palletCapacities !== undefined) {
      pipeline.set('cohin_palletCapacities', palletCapacities);
    }

    await pipeline.exec();

    return res.status(200).json({ success: true, message: 'Data saved successfully' });
  } catch (error) {
    console.error("Error saving data to Redis:", error);
    return res.status(500).json({ error: 'Failed to save data', details: error.message });
  }
}
