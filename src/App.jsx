import "./App.css";
import Fullpage from "./FullPage/Fullpage";
import { useState } from "react";
import { useEffect } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const [inputs, setInputs] = useState({
    user: "",
    AI: "hhh",
  });

  const [display, setDisplay] = useState(false);
  const [previousChat, setPreviousChat] = useState([]);
  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleValidation = () => {
    if (!inputs.user.trim()) {
      console.log("Input is empty or contains only whitespace");
      return false;
    }
    return true;
  };
  // const [loading, setLoading] = useState(false);

  const handleSubmission = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      setDisplay(true);
      setPreviousChat((prev) => [
        ...prev,
        { user: inputs.user, AI: inputs.AI },
      ]);

      handleText();
    }
    setInputs((prevInputs) => ({ ...prevInputs, user: "" }));
  };

  const handleText = async () => {
    // Correct the import to dynamically import the module

    try {
      const genAI = new GoogleGenerativeAI(
        "AIzaSyBEaaz7BzMHhaaA2gnpKReaOxIPnVFEWz4"
      );
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = inputs.user;

      const result = await model.generateContent(prompt);
      const Ai = result.response.text() || "No response from AI.";
      setPreviousChat((prev) =>
        prev.map((chat, index) =>
          index === prev.length - 1 ? { ...chat, AI: Ai } : chat
        )
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  console.log(previousChat);
  return (
    <>
      <Fullpage
        inputs={inputs}
        display={display}
        handleOnchange={handleOnchange}
        handleSubmission={handleSubmission}
        previousChat={previousChat}
      />
    </>
  );
}

export default App;
