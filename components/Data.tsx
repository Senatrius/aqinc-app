import { Iaqi } from '@/interfaces';
import { DataValue } from './DataValue';

export const Data = ({ data }: { data: Iaqi }) => {
  return (
    <div className='grid max-w-[30rem] grid-cols-3 gap-4 sm:grid-cols-4'>
      {Object.entries(data).map((entry, idx) => (
        <DataValue
          key={idx}
          value={entry[1].v}
          label={entry[0]}
        />
      ))}
    </div>
  );
};
