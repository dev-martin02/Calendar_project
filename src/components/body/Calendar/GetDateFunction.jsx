export default function getDateFunction() {
  const date = [];
  let day = 1;
  const userMonth = new Date().getMonth();
  const thisMonthDay = new Date(2024, userMonth, day);

  while (thisMonthDay.getMonth() === userMonth) {
    const result = thisMonthDay.getDate();
    date.push(result);
    day = day + 1;
    thisMonthDay.setDate(day);
  }
  return date;
}
