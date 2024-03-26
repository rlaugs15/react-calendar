import { useRecoilValue } from "recoil";
import { monthAtom, yearAtom } from "../atoms";
import { getLastOfMonth } from "../libs";

function AfterDays() {
  const year = useRecoilValue(yearAtom);
  const month = useRecoilValue(monthAtom);
  //현재 달의 마지막 날 요일 구하기
  const nowMonthLastDate = getLastOfMonth(month);
  const age = new Date(year, month - 1, nowMonthLastDate);
  const days = age.getDay();
  //요일의 남은 숫자만큼 다음달 초 채웧넣기
  //1. 다음달 총 일수 구하기(그냥 숫자로 대체해도 될듯)
  //2.slice로 7 - 현재 달 요일+1 하기
  let cutAfterArray = [];
  cutAfterArray = [...Array.from(Array(7).keys())];
  const newArray = cutAfterArray.slice(0, 7 - (days + 1));
  console.log(newArray);

  return (
    <>
      {newArray.map((afterDay) => (
        <div
          key={afterDay}
          className="h-24 p-2 bg-blue-300 pointer-events-none text-slate-500"
        >
          {afterDay + 1}
        </div>
      ))}
    </>
  );
}

export default AfterDays;
