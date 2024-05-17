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
    <ul id="days">
      {week
        .sort((a, b) => a - b)
        .map((dateContent) => (
          <li key={dateContent} id="dateContainer">
            <button
              onClick={triggerAction}
              className={dateContent === 0 ? `zero` : null}
              style={{
                backgroundColor:
                  dateContent === todayDate() ? "transparent" : "",
              }}
              id="date"
            >
              {dateContent}
            </button>
          </li>
        ))}
    </ul>
  );
}
