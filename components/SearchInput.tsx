import React, { SetStateAction } from 'react';

export const SearchInput = ({
  onChange,
  searchQuery,
  onKeyUp
}: {
  onChange: (e: React.ChangeEvent) => void;
  searchQuery: string;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className='w-full md:max-w-[30rem]'>
      <label
        htmlFor='loc'
        className='sr-only'>
        Enter your location
      </label>
      <input
        placeholder='Enter a location'
        className='w-full border border-transparent border-b-inputBorder bg-input py-3 px-5 leading-none outline-none placeholder:text-inputBorder focus-within:border-inputBorder'
        type='text'
        id='loc'
        onChange={onChange}
        onKeyUp={onKeyUp}
        value={searchQuery}
      />
    </div>
  );
};
