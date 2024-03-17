export default function ShowDate({ week, triggerAction, todayDate }) {
  function removeZero(container) {
    container.map(({ date }) => {
      date.forEach((zero) => {
        if (zero === 0) {
          return <button style={{ backgroundColor: "black" }}>{zero}</button>;
        }
      });
    });
  }

  removeZero(week);
  return week.map(({ date, day }) => (
    <li key={day} id="date-container">
      <ul>
        {date
          .sort((a, b) => a - b)
          .map((dateContent) => (
            <li key={dateContent}>
              <button
                onClick={triggerAction}
                className={dateContent === 0 ? `zero` : null}
                style={{
                  backgroundColor:
                    dateContent === todayDate() ? "lightblue" : "",
                }}
                id="date"
              >
                {dateContent}
              </button>
            </li>
          ))}
      </ul>
    </li>
  ));
}
