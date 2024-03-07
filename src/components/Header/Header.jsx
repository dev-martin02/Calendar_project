import "./Header.css";

export default function Header({ numberOfTheMonth, next, prev }) {
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

  return (
    <div id="header-content">
      <h1>{nameOfTheMonth[numberOfTheMonth]}</h1>
      <div id="prev-next-mon">
        <p onClick={prev}>Previous</p>
        <p onClick={next}>Next</p>
      </div>
    </div>
  );
}
