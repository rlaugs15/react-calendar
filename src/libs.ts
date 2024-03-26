//해당 달의 마지막 일을 구하는 함수
export function getLastOfMonth(nextMonth: number) {
  // 특정 월의 다음 달의 0일을 구함(Month는 00부터 시작하기에 현재 달 그대로 입력하면 다음 달이 됨)
  const nextMonthFirstDay = new Date(2024, nextMonth, 1);
  // 특정 월의 마지막 날짜를 구함 (다음 달의 0일의 전날이 해당 월의 마지막 날짜임)
  nextMonthFirstDay.setDate(nextMonthFirstDay.getDate() - 1);
  // 마지막 날짜의 일자를 반환
  const lastDayOfMonth = nextMonthFirstDay.getDate();
  return lastDayOfMonth;
}
