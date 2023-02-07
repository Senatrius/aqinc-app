import { ReactNode } from 'react';
import { AQI } from './AQI';
import { Credit } from './Credit';
import { Data } from './Data';
import { Date } from './Date';
import { Location } from './Location';
import { SearchInput } from './SearchInput';

export const Card = () => {
  return (
    <div className='relative my-[3%] w-[94%] max-w-[80rem] rounded-2xl border border-cardBorder bg-gradient-to-b from-cardStart to-cardEnd p-6 backdrop-blur-md md:w-[89%] md:py-8 md:px-10'>
      <Credit />
      <SearchInput />
      <div className='mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row md:mt-10'>
        <Location />
        <Date />
      </div>
      <div className='mt-10 flex flex-col items-start justify-between gap-4 sm:flex-row md:mt-16'>
        <AQI />
        <Data />
      </div>
    </div>
  );
};
