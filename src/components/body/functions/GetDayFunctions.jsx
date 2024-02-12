export default function GetDayFunction(input) {
  const days = [];
  let day = 1;
  const userMonth = new Date(input).getMonth();
  const thisMonthDay = new Date(input);
  while (userMonth == thisMonthDay.getMonth()) {
    const result = thisMonthDay.getDay();
    days.push(result);
    day += 1;
    thisMonthDay.setDate(day);
  }
  return days;
}
