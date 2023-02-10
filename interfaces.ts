export interface ICity {
  name: string;
  url: string;
  geo: number[];
}

export interface IResult {
  idx: number;
  aqi: number;
  time: {
    v: number;
    s: string;
    tz: string;
  };
  city: ICity;
}

export interface ISearch {
  status: string;
  data: IResult[];
}

export interface IDaily {
  avg: number;
  day: string;
  max: number;
  min: number;
}

export interface IForecast {
  daily: {
    [key: string]: IDaily[];
  };
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
    forecast: IForecast;
    debug: {
      sync: '2023-02-08T04:07:24+09:00';
    };
  };
}

export interface Iaqi {
  [key: string]: {
    v: number;
  };
}

export interface ISuggestion {
  aqi: string;
  uid: number;
  station: {
    name: string;
    geo: number[];
    url: string;
  };
  time: {
    stime: string;
    tz: string;
    v: number;
  };
}

export interface ISuggestions {
  status: string;
  data: ISuggestion[];
}
