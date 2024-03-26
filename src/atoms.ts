import { atom, selector } from "recoil";

const allDate = new Date();
const year = allDate.getFullYear();
const month = allDate.getMonth() + 1;
const date = allDate.getDate();
const day = allDate.getDay();

export const calendar = atom({
  key: "calendar",
  default: [year, month, date, day],
});

export const yearAtom = selector({
  key: "yearCalendar",
  get: ({ get }) => {
    const year = get(calendar);
    return year[0];
  },
  //newValue는 입력받은 값
  set: ({ set, get }, newValue) => {
    const currentCalendar = get(calendar);
    const updatedCalendar = [...currentCalendar];
    updatedCalendar[0] = newValue as number; // newValue를 year에 할당
    set(calendar, updatedCalendar);
  },
});

export const monthAtom = selector({
  key: "monthCalendar",
  get: ({ get }) => {
    const month = get(calendar);
    return month[1];
  },
  set: ({ set, get }, newValue) => {
    const currentCalendar = get(calendar);
    const updatedCalendar = [...currentCalendar];
    updatedCalendar[1] = newValue as number;
    set(calendar, updatedCalendar);
  },
});

export const dateAtom = selector({
  key: "dateCalendar",
  get: ({ get }) => {
    const date = get(calendar);
    return date[2];
  },
  set: ({ set, get }, newValue) => {
    const currentCalendar = get(calendar);
    const updatedCalendar = [...currentCalendar];
    updatedCalendar[2] = newValue as number;
    set(calendar, updatedCalendar);
  },
});

export const dayAtom = selector({
  key: "dayCalendar",
  get: ({ get }) => {
    const day = get(calendar);
    return day[3];
  },
  set: ({ set, get }, newValue) => {
    const currentCalendar = get(calendar);
    const updatedCalendar = [...currentCalendar];
    updatedCalendar[3] = newValue as number;
    set(calendar, updatedCalendar);
  },
});
