import getDayFunction from "./GetDayFunctions";
import getDateFunction from "./GetDateFunction";
import "./Calendar.css";
import { useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import { useState } from "react";
import { useEffect } from "react";

export default function Calendar() {
  const navigate = useNavigate();

  const [initialMonth, setInitialMonth] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(initialMonth.getMonth());
  const [currentYear, setCurrentYear] = useState(initialMonth.getFullYear());

  const week = [
    { day: "Sunday", number: 0 },
    { day: "Monday", number: 1 },
    { day: "Tuesday", number: 2 },
    { day: "Wednesday", number: 3 },
    { day: "Thursday", number: 4 },
    { day: "Friday", number: 5 },
    { day: "Saturday", number: 6 },
  ];

  const date = getDateFunction(currentMonth);
  const days = getDayFunction(currentMonth);

  week.map((weeks) => {
    weeks.date = [];
    for (let j = 0; j < days.length; j++) {
      if (weeks.number === days[j]) {
        weeks.date.push(date[j]);
      }
    }
  });

  week.map((firstDay) => {
    if (firstDay.date[0] == 1) {
      for (const dayBefore of week) {
        if (firstDay.number > dayBefore.number) {
          dayBefore.date.unshift(0);
        }
      }
    }
  });

  function triggerAction(e) {
    let day = e.target.textContent;
    navigate(`/${day.toLowerCase()}`);
  }

  const handleNextMonth = () => {
    let nextMonth = initialMonth.getMonth() + 1;
    let nextYear = initialMonth.getFullYear();

    if (nextMonth > 11) {
      nextMonth = 0;
      nextYear++;
    }

    setInitialMonth(new Date(nextYear, nextMonth));
  };

  const handlePrevMonth = () => {
    let prevMonth = initialMonth.getMonth() - 1;
    let prevYear = initialMonth.getFullYear();

    if (prevMonth < 0) {
      prevMonth = 11;
      prevYear--;
    }

    setInitialMonth(new Date(prevYear, prevMonth));
  };

  const resetDate = () => {
    const todayDate = new Date();
    if (todayDate.getDate() !== initialMonth.getDate()) {
      setInitialMonth(todayDate);
    }

    return todayDate;
  };

  useEffect(() => {
    setCurrentMonth(initialMonth.getMonth());
    setCurrentYear(initialMonth.getFullYear());
  }, [initialMonth]);

  return (
    <div id="container">
      <h1>
        <Header
          numberOfTheMonth={currentMonth}
          next={handleNextMonth}
          prev={handlePrevMonth}
          currentYear={currentYear}
          resetDate={resetDate}
        />
      </h1>
      <div id="day-week-container">
        <ul id="weekdays">
          {week.map((weekdays) => (
            <li key={weekdays.day}>{weekdays.day}</li>
          ))}
        </ul>
        <div>
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
    </div>
  );
}
