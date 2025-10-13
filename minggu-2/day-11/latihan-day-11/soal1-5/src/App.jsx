import React from "react";
import LiftingStateExample from "./components/LiftingStateExample";
import PropDrillingExample from "./components/PropDrillingExample";
import StateSharingExample from "./components/StateSharingExample";
import CounterReducerExample from "./components/CounterReducerExample";
import ContextExample from "./components/ContextExample";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>tugas React JS day 11</h1>
      <hr />

      <section>
        <LiftingStateExample />
      </section>
      <hr />

      <section>
        <PropDrillingExample />
      </section>
      <hr />

      <section>
        <StateSharingExample />
      </section>
      <hr />

      <section>
        <CounterReducerExample />
      </section>
      <hr />

      <section>
        <ContextExample />
      </section>
    </div>
  );
}

export default App;
