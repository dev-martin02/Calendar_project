import { useState } from "react";
import Header from "./Header";
import getDayFunction from "./body/functions/getDayFunctions";
import getDateFunction from "./body/functions/GetDateFunction";
import "../Calendar.css";

export default function Calendar() {
  const [userDate, setUserDate] = useState("");
  const [text, setText] = useState("");
  const [visibility, setVisibility] = useState(false);

  const week = [
    { day: "Sunday", number: 0 },
    { day: "Monday", number: 1 },
    { day: "Tuesday", number: 2 },
    { day: "Wednesday", number: 3 },
    { day: "Thursday", number: 4 },
    { day: "Friday", number: 5 },
    { day: "Saturday", number: 6 },
  ];

  const date = getDateFunction(userDate);
  const days = getDayFunction(userDate);
  const month = new Date(text).getMonth();
  console.log(month);

  for (let weeks of week) {
    weeks.date = [];
    for (let j = 0; j < days.length; j++) {
      if (weeks.number === days[j]) {
        weeks.date.push(date[j]);
      }
    }
  }

  const getValue = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    console.log(text);
    setUserDate(text);
    setVisibility(true);
  };

  return (
    <div id="calendar-container">
      <input type="date" id="calendar" onChange={getValue} />
      <button id="calendar" onClick={handleOnClick}>
        Search
      </button>

      {visibility && (
        <div>
          <h1>
            <Header numberOfTheMonth={month} />
          </h1>
          <div>
            <ul className="weekdays">
              {week.map((weekdays) => (
                <li key={weekdays.day}>{weekdays.day}</li>
              ))}
            </ul>
            <ul className="days">
              {week.map((weekdays) => (
                <li key={weekdays.day}>
                  <ul>
                    {weekdays.date
                      .sort((a, b) => a - b)
                      .map((day) => (
                        <li key={day}>
                          {" "}
                          <button>{day}</button>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
