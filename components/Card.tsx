import { IData } from '@/pages/api/current';
import { ReactNode, SetStateAction, useState } from 'react';
import { AQI } from './AQI';
import { Credit } from './Credit';
import { Data } from './Data';
import { Date } from './Date';
import { Location } from './Location';
import { SearchInput } from './SearchInput';

export const Card = ({
  aqiDescription,
  data,
  onChange,
  searchQuery,
  onKeyUp,
  suggestions,
  search,
  isSuggestionOpen,
  setIsSuggestionOpen
}: {
  aqiDescription: string;
  data: IData;
  onChange: (e: React.ChangeEvent) => void;
  searchQuery: string;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  suggestions: any;
  search: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isSuggestionOpen: boolean;
  setIsSuggestionOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className='relative my-[3%] w-[94%] max-w-[80rem] rounded-2xl border border-cardBorder bg-gradient-to-b from-cardStart to-cardEnd p-6 backdrop-blur-md md:w-[89%] md:py-8 md:px-10'>
      <h1 className='sr-only'>Air quality index application</h1>
      <Credit />
      <SearchInput
        onChange={onChange}
        searchQuery={searchQuery}
        onKeyUp={onKeyUp}
        suggestions={suggestions}
        search={search}
        isSuggestionOpen={isSuggestionOpen}
        setIsSuggestionOpen={setIsSuggestionOpen}
      />
      <div className='mt-6 flex flex-col items-start justify-between gap-6 sm:flex-row md:mt-10'>
        <h2 className='sr-only'>Date and location info</h2>
        <Location location={data.data.city.name} />
        <Date timestamp={data.data.time.iso} />
      </div>
      <div className='mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row md:mt-16'>
        <h2 className='sr-only'>Air quality data</h2>
        <AQI
          description={aqiDescription}
          aqi={data.data.aqi}
        />
        <Data data={data.data.iaqi} />
      </div>
    </div>
  );
};
