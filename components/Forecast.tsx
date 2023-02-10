import { IForecast } from '@/interfaces';
import { useState } from 'react';
import { Day } from './Day';

export const Forecast = ({ forecast }: { forecast: IForecast }) => {
  const [forecastType, setForecastType] = useState<string>('pm25');

  const forecasts = Object.keys(forecast.daily);

  return (
    <section className='bg-gradient-to-b from-forecastStart to-forecastEnd p-6 md:py-8 md:px-10'>
      <div className='mb-4 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between'>
        <h2 className='text-2xl font-medium'>
          {forecastType.toUpperCase()} Forecast
        </h2>
        <div className='flex gap-1.5'>
          {forecasts.map((forecast, idx) => (
            <button
              onClick={e =>
                setForecastType(e.currentTarget.innerText.toLowerCase())
              }
              className='rounded-full bg-subtext px-4 pt-1.5 pb-1 uppercase text-black hover:bg-white focus:bg-white'
              key={idx}>
              {forecast}
            </button>
          ))}
        </div>
      </div>
      <div className='grid w-full grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6 xl:grid-cols-6'>
        {forecast.daily[forecastType].map((day, idx) => (
          <Day
            key={idx}
            avg={day.avg}
            min={day.min}
            max={day.max}
            date={day.day.slice(-5)}
          />
        ))}
      </div>
    </section>
  );
};
