import React, { SetStateAction, useState } from 'react';

export const SearchInput = ({
  onChange,
  searchQuery,
  onKeyUp,
  suggestions,
  onClick,
  isSuggestionOpen,
  setIsSuggestionOpen
}: {
  onChange: (e: React.ChangeEvent) => void;
  searchQuery: string;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  suggestions: any;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isSuggestionOpen: boolean;
  setIsSuggestionOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className='relative w-full md:max-w-[30rem]'>
      <label
        htmlFor='loc'
        className='sr-only'>
        Enter your location
      </label>
      <input
        onFocus={() => setIsSuggestionOpen(true)}
        onBlur={() => setIsSuggestionOpen(false)}
        placeholder='Enter a location'
        className='w-full border border-transparent border-b-inputBorder bg-input py-3 px-5 leading-none outline-none placeholder:text-inputBorder focus-within:border-inputBorder'
        type='text'
        id='loc'
        onChange={onChange}
        onKeyUp={onKeyUp}
        value={searchQuery}
      />
      {suggestions.status === 'ok' &&
        suggestions !== {} &&
        isSuggestionOpen && (
          <div className='absolute mt-4 max-h-[12rem] w-full overflow-y-auto rounded-lg text-black'>
            {suggestions.data?.map((suggestion, idx) => (
              <button
                data-id={suggestion.uid}
                onClick={onClick}
                className='w-full bg-white py-3 px-5 text-left hover:bg-subtext'
                key={idx}>
                <span className='mr-4 text-lg'>{suggestion.aqi}</span>
                {suggestion.station.name}
              </button>
            ))}
          </div>
        )}
    </div>
  );
};
