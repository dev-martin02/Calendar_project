import { useEffect, useState } from "react";
import "./Header.css";
import rightArrow from "../../assets/rightArrow.svg";
import leftArrow from "../../assets/leftArrow.svg";

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
      <div id="prev-next-mon">
        <button onClick={prev} className="arrow">
          <img src={`${leftArrow}`} alt="" />
        </button>
        {
          <button onClick={resetDate} id="todayBtn">
            Today's date
          </button>
        }
        <button onClick={next} className="arrow">
          <img src={`${rightArrow}`} alt="" />
        </button>
      </div>
    </div>
  );
}
