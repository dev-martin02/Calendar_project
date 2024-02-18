import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Task() {
  const { taskId } = useParams();
  const [userValue, setUserValue] = useState("");
  const [taskList, setTaskList] = useState([]);

  //Header
  const date = new Date();

  const today = (userDate) => {
    const thisMonth = date.getMonth();
    const thisYear = date.getFullYear();
    const thisDate = date.getDate();

    if (userDate) {
      return new Date(thisYear, thisMonth, userDate).toLocaleDateString();
    }
    return new Date(thisYear, thisMonth, thisDate).toLocaleDateString();
  };

  let headerText = today(taskId);

  if (taskId.toLowerCase() == "task" || taskId.toLowerCase() === "today") {
    headerText = today();
  }

  if (headerText === "Invalid Date") {
    alert("Invalid Date, Please choose a Number!!");
    headerText = today();
  }

  // To do functionality
  function getValue(input) {
    setUserValue(input.target.value);
  }

  function addTask() {
    if (!userValue) {
      return null;
    }
    const newTask = { id: new Date(), value: userValue };
    setTaskList((oldState) => [...oldState, newTask]);
    setUserValue("");
  }

  function deleteTask({ id }) {
    setTaskList((oldState) => oldState.filter((task) => task.id !== id));
  }

  return (
    <>
      <h1>{headerText}</h1>
      <input type="text" onChange={getValue} value={userValue} />
      <button onClick={addTask}>Add</button>
      <ul>
        {taskList.map((task) => (
          <>
            <li key={task.id}>{task.value}</li>
            <button onClick={() => deleteTask(task)}>Delete</button>
          </>
        ))}
      </ul>
    </>
  );
}
