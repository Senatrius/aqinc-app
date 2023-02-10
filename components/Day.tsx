export const Day = ({
  avg,
  min,
  max,
  date
}: {
  avg: number;
  min: number;
  max: number;
  date: string;
}) => {
  return (
    <div className='flex flex-col'>
      <p>{date}</p>
      <div className='flex items-end gap-1.5'>
        <p className='text-5xl'>{avg}</p>
        <div className='flex flex-col'>
          <p className='text-sm text-subtext'>Min: {min}</p>
          <p className='text-sm text-subtext'>Max: {max}</p>
        </div>
      </div>
    </div>
  );
};
