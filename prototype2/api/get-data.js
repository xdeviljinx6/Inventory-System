import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Very basic authentication check
  const authHeader = req.headers.authorization;
  const expectedPassword = process.env.SYSTEM_PASSWORD || '101010';

  if (!authHeader || authHeader !== `Bearer ${expectedPassword}`) {
      return res.status(401).json({ error: 'Unauthorized. Incorrect password.' });
  }

  try {
    const [inventoryData, transactionHistory, palletCapacities] = await Promise.all([
      redis.get('cohin_inventoryData'),
      redis.get('cohin_transactionHistory'),
      redis.get('cohin_palletCapacities')
    ]);

    return res.status(200).json({
      inventoryData: inventoryData || null,
      transactionHistory: transactionHistory || null,
      palletCapacities: palletCapacities || null
    });
  } catch (error) {
    console.error("Error fetching data from Redis:", error);
    return res.status(500).json({ error: 'Failed to fetch data' });
  }
}
