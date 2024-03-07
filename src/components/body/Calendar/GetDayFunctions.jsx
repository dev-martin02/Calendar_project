export default function GetDayFunction(userMonth) {
  const days = [];
  let day = 1;
  // const userMonth = new Date().getMonth();
  const thisMonthDay = new Date(2024, userMonth, day);

  while (userMonth == thisMonthDay.getMonth()) {
    const result = thisMonthDay.getDay();
    days.push(result);
    day += 1;
    thisMonthDay.setDate(day);
  }

  return days;
}
