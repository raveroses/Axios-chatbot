import "./App.css";
import Fullpage from "./FullPage/Fullpage";
import { useState } from "react";
import APIKEY from "./Components/API-KEY/API";
function App() {
  const [inputs, setInputs] = useState("");
  const [display, setDisplay] = useState(false);

  const handleOnchange = (e) => {
    setInputs(e.target.value);
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    handleText();
    setInputs("");
  };

  const handleText = async () => {
    // Correct the import to dynamically import the module
    const { GoogleGenerativeAI } = await import("@google/generative-ai");

    const genAI = new GoogleGenerativeAI(APIKEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Explain how AI works";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  };
  return (
    <>
      <Fullpage
        inputs={inputs}
        display={display}
        handleOnchange={handleOnchange}
        handleSubmission={handleSubmission}
      />
    </>
  );
}

export default App;
