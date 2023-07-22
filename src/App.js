import { useState } from "react";
import "./App.css";
import Tanks from "./CUMpanents/Tanks";
import Buttons from "./CUMpanents/Buttons";

function App() {
  const [name, setName] = useState("Max");

  return (
    <div>
      <Tanks tytel={name} />
      <Buttons buttons={setName} />
    </div>
  );
}

export default App;
