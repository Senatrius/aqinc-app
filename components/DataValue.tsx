export const DataValue = ({
  value,
  label
}: {
  value: number;
  label: string;
}) => {
  return (
    <div>
      <p className='text-2xl leading-none'>{value || 'N/A'}</p>
      <p className='text-lg uppercase tracking-wider text-subtext'>{label}</p>
    </div>
  );
};
