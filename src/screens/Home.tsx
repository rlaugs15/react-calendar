import DateCard from "../components/DateCard";
import { getLastOfMonth } from "../libs";
import { useRecoilValue } from "recoil";
import { monthAtom } from "../atoms";
import BeforDays from "../components/BeforDays";
import AfterDays from "../components/AfterDays";
import NavBar from "../components/NavBar";

function Home() {
  const month = useRecoilValue(monthAtom);
  const monthOfDays = getLastOfMonth(month);
  return (
    <div className="p-4">
      <NavBar />
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
