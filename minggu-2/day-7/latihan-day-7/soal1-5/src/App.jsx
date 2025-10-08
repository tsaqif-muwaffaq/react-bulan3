import React from "react";

import ButtonEvents from "./components/ButtonEvents";
import SyntheticExample from "./components/SyntheticExample";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div>
      <h1>tugas react js day 7</h1>
      <ButtonEvents />
       <SyntheticExample />
      <ControlledForm />
      <UncontrolledForm />
      <RegisterForm />
    </div>
  );
}

export default App;
