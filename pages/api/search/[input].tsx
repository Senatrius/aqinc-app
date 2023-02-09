// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface ICity {
  name: string;
  url: string;
  geo: number[];
}

interface IResult {
  idx: number;
  aqi: number;
  time: {
    v: number;
    s: string;
    tz: string;
  };
  city: ICity;
}

interface ISearch {
  status: string;
  data: IResult[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISearch>
) {
  const query = req.query.input;

  try {
    const response = await fetch(
      `http://api.waqi.info/search/?keyword=${query}&token=${process.env.AQICN_TOKEN}`
    );
    const result = await response.json();

    res.status(200).json(result);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
