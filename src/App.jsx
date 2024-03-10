import { Route, Routes } from "react-router-dom";
import Calendar from "./components/body/Calendar/Calendar";
import Task from "./components/Task/Task";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/:taskId?" element={<Task />} />
      </Routes>
    </>
  );
}

export default App;
