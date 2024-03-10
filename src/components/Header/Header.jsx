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
    } else {
      return setDisplayBtn(false);
    }
  }

  useEffect(() => {
    compareDate();
  }, [numberOfTheMonth]);

  return (
    <div id="header-content">
      <div>
        <h1>{nameOfTheMonth[numberOfTheMonth]}</h1>
        <h2>{currentYear}</h2>
      </div>
      <div id="prev-next-mon">
        <button onClick={prev}>Previous</button>
        {displayBtn && <button onClick={resetDate}>Today's date</button>}
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}
