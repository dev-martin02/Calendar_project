import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Days from "./components/body/Days";

function App() {
  return (
    <>
      <Header nameOfTheMonth={"January"} />
      <Days />
    </>
  );
}

export default App;
