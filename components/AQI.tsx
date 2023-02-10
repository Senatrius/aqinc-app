export const AQI = ({
  description,
  aqi
}: {
  description: string;
  aqi: number;
}) => {
  return (
    <div>
      <p className='text-5xl font-medium leading-none md:text-6xl'>{aqi}</p>
      <p className='max-w-[15rem] text-lg uppercase leading-snug tracking-widest text-subtext'>
        {description}
      </p>
    </div>
  );
};
