import Body from "../Components/Body";
import Header from "../Components/Header";
import Input from "../Components/Input";
import { useState } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";
const Fullpage = () => {
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
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  const handleShow2 = () => {
    setShow2((prev) => !prev);
    console.log("you clicked viewDetail");
  };
  console.log(show2);

  return (
    <div className="mother">
      <Header show={show} handleShow={handleShow} handleShow2={handleShow2} />
      <Body
        inputs={inputs}
        display={display}
        previousChat={previousChat}
        show={show}
        show2={show2}
        handleShow={handleShow}
        handleShow2={handleShow2}
      />
      <Input
        inputs={inputs}
        handleOnchange={handleOnchange}
        handleSubmission={handleSubmission}
      />
    </div>
  );
};

export default Fullpage;
