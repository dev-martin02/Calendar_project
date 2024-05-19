import { useEffect, useState } from "react";
import "./Header.css";

export default function Header({
  numberOfTheMonth,
  next,
  prev,
  currentYear,
  resetDate,
  userDate,
}) {
  const [displayBtn, setDisplayBtn] = useState(false);

  const nameOfTheMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function compareDate() {
    const todayDate = new Date();
    if (todayDate.getDate() !== userDate.getDate()) {
      return setDisplayBtn(true);
    }
    return setDisplayBtn(false);
  }

  useEffect(() => {
    compareDate();
  }, [numberOfTheMonth]);

  return (
    <div id="headerContainer">
      <div id="month-year">
        <h1>{`${nameOfTheMonth[numberOfTheMonth]} ${currentYear}`}</h1>
        <h2></h2>
      </div>
      <div>
        <h3>Month</h3>
      </div>

      <div id="prev-next-mon">
        <button onClick={prev} className="arrow">
          {"<"}
        </button>
        {<button onClick={resetDate}>Today's date</button>}
        <button onClick={next} className="arrow">
          {">"}
        </button>
      </div>
    </div>
  );
}
