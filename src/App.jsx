import "./App.css";
import Fullpage from "./FullPage/Fullpage";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState(false);
  console.log(input);
  const handleOnchange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <Fullpage
        input={input}
        display={display}
        handleOnChange={handleOnchange}
      />
    </>
  );
}

export default App;
