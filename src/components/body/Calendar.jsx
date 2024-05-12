import getDayFunction from "./utils/GetDayFunctions";
import getDateFunction from "./utils/GetDateFunction";
import "./Calendar.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { useState } from "react";
import { useEffect } from "react";
import ShowDate from "./utils/ShowDate";

/*
    There is a bug on the date of previus year, they are not displaying in the correct order for exmaple December 12 was a Tuesday and in the project it says that it was a Thursday

    To-DO 
      - Improve structure of the code
      - Improve UI of the web page
      - Add Icons

    What do you want to accomplish with this project?
      - Functionality, display the rigth days in the rigth order 
      - Simple nice looking Calendar
      - Responsive design

 */

export default function Calendar() {
  const navigate = useNavigate();

  const [initialDate, setInitialDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth());
  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());

  const week = [
    { day: "Sun", number: 0 },
    { day: "Mon", number: 1 },
    { day: "Tue", number: 2 },
    { day: "Wed", number: 3 },
    { day: "Thu", number: 4 },
    { day: "Fri", number: 5 },
    { day: "Sat", number: 6 },
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

  const triggerAction = (e) => {
    let day = e.target.textContent;
    navigate(`/${day.toLowerCase()}`);
  };

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
      return setInitialDate(todayDate);
    }
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
      });
    });
    return num;
  };

  return (
    <div id="calendarContainer">
      <Header
        numberOfTheMonth={currentMonth}
        next={handleNextMonth}
        prev={handlePrevMonth}
        currentYear={currentYear}
        resetDate={resetDate}
        userDate={initialDate}
      />

      <div>
        <ul id="weekAndDate">
          {week.map((weekdays) => (
            <li key={weekdays.day}>
              {weekdays.day}

              <ShowDate
                week={weekdays.date}
                triggerAction={triggerAction}
                todayDate={todayDate}
              />
              {/* <ul id="days">
                <li id="dateContainer">
                  {weekdays.date.map((x) => (
                    <button>{x}</button>
                  ))}
                </li>
              </ul> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
