export const Date = ({ timestamp }: { timestamp: string }) => {
  const d = new window.Date(timestamp).toLocaleTimeString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const [day, date, _, time] = d.split(/,\s|\sat\s/);
  const hour = time.slice(0, 2);
  const period = time.slice(-2);
  return (
    <div className='sm:text-right'>
      <p className='text-[1.75rem] leading-none'>
        {hour}:00
        <span className='text-xl'>{period}</span>
      </p>
      <p className='text-lg leading-snug text-subtext'>{date + ', ' + day}</p>
    </div>
  );
};
