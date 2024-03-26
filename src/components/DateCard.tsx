interface IDateCard {
  monthOfDays: number;
}

function DateCard({ monthOfDays }: IDateCard) {
  return (
    <>
      {[...Array.from(Array(monthOfDays).keys())].map((date) => (
        <div key={date} className="h-24 p-2 bg-blue-300">
          {date + 1}
        </div>
      ))}
    </>
  );
}

export default DateCard;
