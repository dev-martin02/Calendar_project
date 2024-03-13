export default function ShowDate({ week, triggerAction, todayDate }) {
  console.log(week);
  return week.map((weekdays) => (
    <li key={weekdays.day}>
      <ul>
        {weekdays.date
          .sort((a, b) => a - b)
          .map((day) => (
            <li key={day}>
              <button
                onClick={triggerAction}
                style={{
                  backgroundColor: day === todayDate() ? "lightblue" : "none",
                }}
              >
                {day}
              </button>
            </li>
          ))}
      </ul>
    </li>
  ));
}
