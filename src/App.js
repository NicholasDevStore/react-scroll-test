import React from "react";
import ScrollBar from "./components/ScrollBar";
import DemoCard from "./components/DemoCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollBar
        className="scrollBar"
      >
        <DemoCard />
        <DemoCard />
        <DemoCard />
        <DemoCard />
      </ScrollBar>
    </div>
  );
}

export default App;
