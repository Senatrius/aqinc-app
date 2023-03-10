// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IData } from '@/interfaces';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>
) {
  const query = req.query.country;

  try {
    const response = await fetch(
      `http://api.waqi.info/feed/${query}/?token=${process.env.AQICN_TOKEN}`
    );
    const result = await response.json();

    res.status(200).json(result);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
