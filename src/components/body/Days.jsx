import { useState } from "react";

export default function Days() {
  const weeks = [
    { day: "Sunday", number: 0 },
    { day: "Monday", number: 1 },
    { day: "Tuesday", number: 2 },
    { day: "Wednesday", number: 3 },
    { day: "Thursday", number: 4 },
    { day: "Friday", number: 5 },
    { day: "Saturday", number: 6 },
  ];

  const days = [];
  function getDayFunction(year, month) {
    let day = 1;
    const thisMonthDay = new Date(year, month, day);

    while (month == thisMonthDay.getMonth()) {
      const result = thisMonthDay.getDay();
      days.push(result);
      day += 1;
      thisMonthDay.setDate(day);
    }
  }
  getDayFunction(2024, 1);

  const date = [];
  function getDateFunction(year, month) {
    let day = 1;
    const thisMonthDay = new Date(year, month, day);

    while (month == thisMonthDay.getMonth()) {
      const result = thisMonthDay.getDate();
      date.push(result);
      day = day + 1;
      thisMonthDay.setDate(day);
    }
  }
  getDateFunction(2024, 1);

  for (let i = 0; i < weeks.length; i++) {
    weeks[i].date = [];
    for (let j = 0; j < days.length; j++) {
      if (weeks[i].number === days[j]) {
        weeks[i].date.push(date[j]);
      }
    }
  }

  console.log(weeks);
}
