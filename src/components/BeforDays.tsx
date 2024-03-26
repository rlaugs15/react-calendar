import { useRecoilValue } from "recoil";
import { monthAtom, yearAtom } from "../atoms";
import { getLastOfMonth } from "../libs";

function BeforDays() {
  const year = useRecoilValue(yearAtom);
  const month = useRecoilValue(monthAtom);
  const nowMonthFirstDay = new Date(year, month - 1, 1);
  const beforLastDay = nowMonthFirstDay.getDay();
  let cutBeforArray = [];
  const beforDate = getLastOfMonth(month - 1);
  cutBeforArray = [...Array.from(Array(beforDate).keys())];
  const newArray = cutBeforArray.splice(cutBeforArray.length - beforLastDay);
  return (
    <>
      {newArray.map((beforDay) => (
        <div
          key={beforDay}
          className="h-24 p-2 bg-blue-300 pointer-events-none text-slate-500"
        >
          {beforDay + 1}
        </div>
      ))}
    </>
  );
}

export default BeforDays;
