interface IDateCard {
  date: number;
}

function DateCard({ date }: IDateCard) {
  return (
    <div key={date} className="h-24 p-2 bg-blue-300">
      {date + 1}
    </div>
  );
}

export default DateCard;
