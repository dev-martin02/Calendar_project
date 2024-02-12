export default function getDateFunction(input) {
  const date = [];
  let day = 1;
  const userMonth = new Date(input).getMonth();
  console.log(userMonth); // why im getting the previous month when the input is the 1st of any month
  const thisMonthDay = new Date(input);

  while (thisMonthDay.getMonth() === userMonth) {
    const result = thisMonthDay.getDate();
    date.push(result);
    thisMonthDay.setDate(day);
    day = day + 1;
  }
  if (date.length > 31) {
    date.shift();
    return date;
  }
  return date;
}
