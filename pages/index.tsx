import Head from 'next/head';
import { Josefin_Sans } from '@next/font/google';
import { Card } from '@/components/Card';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { IData } from './api/current';

const getCondition = (aqi: number) => {
  if (0 <= aqi && aqi <= 50) {
    return 'good';
  } else if (50 < aqi && aqi <= 100) {
    return 'moderate';
  } else if (100 < aqi && aqi <= 150) {
    return 'someUnhealthy';
  } else if (150 < aqi && aqi <= 200) {
    return 'unhealthy';
  } else if (200 < aqi && aqi <= 300) {
    return 'veryUnhealthy';
  } else if (300 < aqi) {
    return 'hazardous';
  } else {
    return 'good';
  }
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [condition, setCondition] = useState<string>('good');
  const [aqiData, setAqiData] = useState<IData | null>(null);
  const [suggestions, setSuggestions] = useState<any>({});
  const [isSuggestionOpen, setIsSuggestionOpen] = useState<boolean>(true);

  const interval = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    (async () => {
      const response = await fetch('api/current');
      const data = await response.json();

      setAqiData(data);
    })();
  }, []);

  useEffect(() => {
    aqiData && setCondition(getCondition(aqiData.data.aqi));
  }, [aqiData]);

  const onChange = (e: ChangeEvent) => {
    setIsSuggestionOpen(false);
    setSearchQuery((e.target as HTMLInputElement).value);
  };

  const search = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const response = await fetch(`api/@${e.target.dataset.id}`);
    const data = await response.json();

    setAqiData(data);
  };

  const onKeyUp = () => {
    clearInterval(interval.current);
    interval.current = setTimeout(async () => {
      const response = await fetch(`api/search/${searchQuery}`);
      const data = await response.json();

      setSuggestions(data);
      setIsSuggestionOpen(true);
    }, 2000);
  };

  let background = './images/good.jpeg';
  let aqiDescription = 'good';

  switch (condition) {
    case 'good':
      background = './images/good.jpeg';
      aqiDescription = 'good air quality';
      break;
    case 'moderate':
      background = './images/moderate.jpeg';
      aqiDescription = 'moderate air quality';
      break;
    case 'someUnhealthy':
      background = './images/unhealthy-1.jpeg';
      aqiDescription = 'unhealthy for sensitive groups';
      break;
    case 'unhealthy':
      background = './images/unhealthy-2.jpeg';
      aqiDescription = 'generally unhealthy';
      break;
    case 'veryUnhealthy':
      background = './images/unhealthy-3.jpeg';
      aqiDescription = 'very unhealthy';
      break;
    case 'hazardous':
      background = './images/hazardous.jpeg';
      aqiDescription = 'caution, hazardous';
      break;
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <main
        data-theme={condition}
        style={{
          background: `url(${background}) no-repeat center/cover`
        }}
        className='relative grid w-full place-items-center text-text'>
        {aqiData && (
          <Card
            aqiDescription={aqiDescription}
            data={aqiData}
            onChange={onChange}
            searchQuery={searchQuery}
            onKeyUp={onKeyUp}
            suggestions={suggestions}
            onClick={search}
            isSuggestionOpen={isSuggestionOpen}
            setIsSuggestionOpen={setIsSuggestionOpen}
          />
        )}
      </main>
    </>
  );
}
