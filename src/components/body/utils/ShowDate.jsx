export default function ShowDate({ week, triggerAction, todayDate }) {
  return (
    <ul className="days">
      {week.map((dateContent) => (
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
