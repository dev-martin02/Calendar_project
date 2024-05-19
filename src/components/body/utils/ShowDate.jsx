export default function ShowDate({ week, triggerAction, todayDate }) {
  // function removeZero(container) {
  //   container.map(({ date }) => {
  //     date.forEach((zero) => {
  //       if (zero === 0) {
  //         return <button style={{ backgroundColor: "black" }}>{zero}</button>;
  //       }
  //     });
  //   });
  // }

  // removeZero(week);
  return (
    <ul className="days">
      {week
        .sort((a, b) => a - b)
        .map((dateContent) => (
          <li key={dateContent} className="dateContainer">
            <button
              onClick={triggerAction}
              className={"days" && dateContent === 0 ? "zero" : null}
              style={{
                color: dateContent === todayDate() ? "white" : "",
              }}
            >
              {dateContent}
            </button>
          </li>
        ))}
    </ul>
  );
}
