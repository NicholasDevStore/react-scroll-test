import React from "react";
import ScrollBar from "./components/ScrollBar";
import DemoCard from "./components/DemoCard";
import "./App.css";
import { infos } from "./data";

function App() {
  return (
    <div className="App">
      <ScrollBar className="scrollBar">
        {infos.map((info, index) => (
          <DemoCard info={info} key={index} />
        ))}
      </ScrollBar>
    </div>
  );
}

export default App;
