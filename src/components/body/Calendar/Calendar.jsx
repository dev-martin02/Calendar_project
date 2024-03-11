import getDayFunction from "./GetDayFunctions";
import getDateFunction from "./GetDateFunction";
import "./Calendar.css";
import { useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import { useState } from "react";
import { useEffect } from "react";

export default function Calendar() {
  const navigate = useNavigate();

  const [initialDate, setInitialDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth());
  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());

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
    let nextMonth = initialDate.getMonth() + 1;
    let nextYear = initialDate.getFullYear();

    if (nextMonth > 11) {
      nextMonth = 0;
      nextYear++;
    }
    setInitialDate(new Date(nextYear, nextMonth));
  };

  const handlePrevMonth = () => {
    let prevMonth = initialDate.getMonth() - 1;
    let prevYear = initialDate.getFullYear();
    if (prevMonth < 0) {
      prevMonth = 11;
      prevYear--;
    }

    setInitialDate(new Date(prevYear, prevMonth));
  };

  const resetDate = () => {
    const todayDate = new Date();
    if (todayDate.getDate() !== initialDate.getDate()) {
      setInitialDate(todayDate);
    }

    return todayDate;
  };

  useEffect(() => {
    setCurrentMonth(initialDate.getMonth());
    setCurrentYear(initialDate.getFullYear());
  }, [initialDate]);

  const todayDate = () => {
    const today = new Date().getDate();
    let num;
    week.map((data) => {
      data.date.filter((x) => {
        if (x === today) {
          num = x;
        }
        console.log(num);
      });
    });

    return num;
  };

  todayDate();
  return (
    <div id="container">
      <h1>
        <Header
          numberOfTheMonth={currentMonth}
          next={handleNextMonth}
          prev={handlePrevMonth}
          currentYear={currentYear}
          resetDate={resetDate}
          userDate={initialDate}
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
                        <button
                          onClick={triggerAction}
                          style={{
                            backgroundColor:
                              day === todayDate() ? "lightblue" : "none",
                          }}
                        >
                          {day}
                        </button>
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
