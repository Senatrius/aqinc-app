// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface IDaily {
  avg: number;
  day: string;
  max: number;
  min: number;
}

export interface IData {
  status: string;
  data: {
    aqi: number;
    idx: number;
    attributions: [
      {
        url: string;
        name: string;
      },
      {
        url: string;
        name: string;
      }
    ];
    city: {
      geo: [number, number];
      name: string;
      url: string;
      location: string;
    };
    dominentpol: string;
    iaqi: {
      [key: string]: {
        v: number;
      };
    };
    time: {
      s: string;
      tz: string;
      v: number;
      iso: string;
    };
    forecast: {
      daily: {
        o3: IDaily[];
        pm10: IDaily[];
        pm25: IDaily[];
        uvi: IDaily[];
      };
    };
    debug: {
      sync: '2023-02-08T04:07:24+09:00';
    };
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>
) {
  try {
    const response = await fetch(
      `http://api.waqi.info/feed/here/?token=${process.env.AQICN_TOKEN}`
    );
    const result = await response.json();

    res.status(200).json(result);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
