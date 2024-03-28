import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { monthAtom, yearAtom } from "../atoms";
import { useForm } from "react-hook-form";

interface IForm {
  year?: number;
  month?: number;
}

function NavBar() {
  const [month, setMonth] = useRecoilState(monthAtom);
  const [year, setYear] = useRecoilState(yearAtom);
  const [beforYear, setBeforeYear] = useState(false);
  const [afterYear, setAfterYear] = useState(false);

  const onBeforeYearClick = () => {
    setYear((prev) => prev - 1);
  };

  const onAfterYearClick = () => {
    setYear((prev) => prev + 1);
  };

  const onBeforeMonthClick = () => {
    setMonth((prev) => {
      if (prev <= 1) {
        setBeforeYear(true);
        return 12; // 년도를 변경한 후에 prev 값을 수정하지 않음
      } else {
        return prev - 1;
      }
    });
  };

  const onafterMonthClick = () => {
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
  const { register, handleSubmit } = useForm<IForm>({
    defaultValues: { year },
  });
  const onAgeChange = ({ year, month }: IForm) => {
    if (year) {
      setYear(year);
    } else return;
    if (month) {
      setMonth(month);
    } else return;
  };
  return (
    <nav className="flex items-center justify-center w-full px-10 py-3 space-x-8 text-2xl font-semibold text-center bg-blue-400">
      <span className="flex items-center space-x-3 text-3xl">
        <button onClick={onBeforeYearClick}>&#171;</button>
        <button onClick={onBeforeMonthClick}>&#60;</button>
      </span>
      <form onSubmit={handleSubmit(onAgeChange)} className="space-x-4">
        <input
          {...register("year")}
          type="text"
          placeholder={year + ""}
          className="w-16 text-center bg-blue-200 rounded-lg focus:bg-white"
        />
        년
        <input
          {...register("month")}
          type="text"
          placeholder={month + ""}
          className="w-10 text-center bg-blue-200 rounded-lg focus:bg-white"
        />
        월
      </form>
      <span className="flex items-center space-x-3 text-3xl">
        <button onClick={onafterMonthClick}>&#62;</button>
        <button onClick={onAfterYearClick}>&#187;</button>
      </span>
    </nav>
  );
}

export default NavBar;
