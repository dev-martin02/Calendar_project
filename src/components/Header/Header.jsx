import { useEffect, useState } from "react";
import "./Header.css";

export default function Header({
  numberOfTheMonth,
  next,
  prev,
  currentYear,
  resetDate,
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

  function compareMonth() {
    const todayDate = new Date();
    if (todayDate.getMonth() !== numberOfTheMonth) {
      return setDisplayBtn(true);
    }
    return setDisplayBtn(false);
  }

  useEffect(() => {
    compareMonth();
  }, [numberOfTheMonth]);

  return (
    <div id="header-content">
      <h1>{nameOfTheMonth[numberOfTheMonth]}</h1>
      <h2>{currentYear}</h2>
      <div id="prev-next-mon">
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
        {displayBtn && <button onClick={resetDate}>Today's date</button>}
      </div>
    </div>
  );
}
