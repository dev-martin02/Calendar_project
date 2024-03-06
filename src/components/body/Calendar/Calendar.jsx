import getDayFunction from "./GetDayFunctions";
import getDateFunction from "./GetDateFunction";
import "./Calendar.css";
import { useNavigate } from "react-router-dom";
import Header from "../../Header/Header";

export default function Calendar() {
  const navigate = useNavigate();

  const week = [
    { day: "Sunday", number: 0 },
    { day: "Monday", number: 1 },
    { day: "Tuesday", number: 2 },
    { day: "Wednesday", number: 3 },
    { day: "Thursday", number: 4 },
    { day: "Friday", number: 5 },
    { day: "Saturday", number: 6 },
  ];

  const date = getDateFunction();
  const days = getDayFunction();
  const month = new Date().getMonth();

  for (let weeks of week) {
    weeks.date = [];
    for (let j = 0; j < days.length; j++) {
      if (weeks.number === days[j]) {
        weeks.date.push(date[j]);
      }
    }
  }

  for (const firstDay of week) {
    if (firstDay.date[0] == 1) {
      for (const dayBefore of week) {
        if (firstDay.number > dayBefore.number) {
          dayBefore.date.unshift(0);
        }
      }
    }
  }

  function triggerAction(e) {
    let day = e.target.textContent;
    navigate(`/${day.toLowerCase()}`);
  }

  return (
    <div id="container">
      <h1>
        <Header numberOfTheMonth={month} />
      </h1>
      <div id="day-week-container">
        <ul id="weekdays">
          {week.map((weekdays) => (
            <li key={weekdays.day}>{weekdays.day}</li>
          ))}
        </ul>

        <ul id="days">
          {week.map((weekdays) => (
            <li key={weekdays.day}>
              <ul>
                {weekdays.date
                  .sort((a, b) => a - b)
                  .map((day) => (
                    <li key={day}>
                      {" "}
                      <button onClick={triggerAction}>{day}</button>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
