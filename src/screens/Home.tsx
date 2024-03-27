import DateCard from "../components/DateCard";
import { getLastOfMonth } from "../libs";
import { useRecoilState, useRecoilValue } from "recoil";
import { dayAtom, monthAtom, yearAtom } from "../atoms";
import BeforDays from "../components/BeforDays";
import AfterDays from "../components/AfterDays";
import { useEffect, useState } from "react";

function Home() {
  const [month, setMonth] = useRecoilState(monthAtom);
  const [year, setYear] = useRecoilState(yearAtom);
  const [beforYear, setBeforeYear] = useState(false);
  const [afterYear, setAfterYear] = useState(false);
  const monthOfDays = getLastOfMonth(month);

  const onBeforeYear = () => {};

  const onbeforeClick = () => {
    setMonth((prev) => {
      if (prev <= 1) {
        setBeforeYear(true);
        return 12; // 년도를 변경한 후에 prev 값을 수정하지 않음
      } else {
        return prev - 1;
      }
    });
  };

  const onafterClick = () => {
    setMonth((prev) => {
      if (prev >= 12) {
        setAfterYear(true);
        return 1; // 년도를 변경한 후에 prev 값을 수정하지 않음
      } else {
        return prev + 1;
      }
    });
  };
  useEffect(() => {
    if (beforYear) {
      setYear((prev) => prev - 1);
      setBeforeYear(false);
    }
    if (afterYear) {
      setYear((prev) => prev + 1);
      setAfterYear(false);
    }
  }, [beforYear, afterYear, setYear, setBeforeYear, setAfterYear]);
  return (
    <div className="p-4">
      <div className="w-full py-3 space-x-3 text-2xl font-semibold text-center bg-blue-400">
        <span>{year}</span>
        <button onClick={onbeforeClick}>&#60;</button>
        <span>{month}월</span>
        <button onClick={onafterClick}>&#62;</button>
      </div>
      <main className="grid grid-cols-7 gap-1">
        {["일", "월", "화", "수", "목", "금", "토"].map((day, i) => (
          <div key={i} className="py-2 text-center bg-blue-600">
            {day}
          </div>
        ))}
        <BeforDays />
        <DateCard monthOfDays={monthOfDays} />
        <AfterDays />
      </main>
    </div>
  );
}

export default Home;
