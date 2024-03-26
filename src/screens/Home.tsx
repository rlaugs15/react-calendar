import DateCard from "../components/DateCard";
import { getLastOfMonth } from "../libs";
import { useRecoilState, useRecoilValue } from "recoil";
import { dayAtom, monthAtom, yearAtom } from "../atoms";
import BeforDays from "../components/BeforDays";
import AfterDays from "../components/AfterDays";

function Home() {
  const [month, setMonth] = useRecoilState(monthAtom);
  const monthOfDays = getLastOfMonth(month);
  const onbeforeClick = () => {
    setMonth((prov) => (prov <= 1 ? 12 : prov - 1));
  };
  const onafterClick = () => {
    setMonth((prov) => (prov >= 12 ? 1 : prov + 1));
  };

  return (
    <div className="p-4">
      <div className="w-full py-3 space-x-3 text-2xl font-semibold text-center bg-blue-400">
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
