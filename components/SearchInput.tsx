export const SearchInput = () => {
  return (
    <form className='w-full md:max-w-[30rem]'>
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
      />
    </form>
  );
};
