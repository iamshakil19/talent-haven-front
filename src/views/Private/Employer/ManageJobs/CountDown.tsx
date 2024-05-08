

const CountDown = ({
  days,
  hours,
  minutes,
  // seconds,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  // seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    return (
      <p className="bg-secondary-red text-primary-red px-3 py-1 text-xs rounded-full tracking-wide">
        Time Expired
      </p>
    );
  } else {
    return (
      <p
        className={`${
          days >= 7
            ? "text-primary-green"
            : days < 7 && days > 1
            ? "text-primary-orange"
            : days <= 1
            ? "text-primary-red"
            : ""
        } text-sm flex items-center justify-center gap-4`}
      >
        <span className="flex flex-col items-center justify-center">
          <span>{days}</span>
          <span className="text-xs">Days</span>
        </span>
        <span className="flex flex-col items-center justify-center">
          <span>{hours}</span>
          <span className="text-xs">Hours</span>
        </span>
        <span className="flex flex-col items-center justify-center">
          <span>{minutes}</span>
          <span className="text-xs">Minutes</span>
        </span>
      </p>
    );
  }
};

export default CountDown;
