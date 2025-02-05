import Body from "../Components/Body";
import Header from "../Components/Header";
import Input from "../Components/Input";
import { useState } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";

const Fullpage = () => {
  const [inputs, setInputs] = useState({
    user: "",
    AI: "",
  });
  const [question, setQuestion] = useState("");
  const [error, setError] = useState(false);
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
  const [loading, setLoading] = useState(false);

  const handleSubmission = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      setDisplay(true);
      setPreviousChat((prev) => [
        ...prev,
        { user: inputs.user, AI: inputs.AI, loading: true },
      ]);

      handleText();
    }
    setInputs((prevInputs) => ({ ...prevInputs, user: "" }));
  };

  const handleText = async (id) => {
    // Correct the import to dynamically import the module

    try {
      const genAI = new GoogleGenerativeAI(
        "AIzaSyBEaaz7BzMHhaaA2gnpKReaOxIPnVFEWz4"
      );
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = inputs.user || id;
      console.log(prompt);
      const result = await model.generateContent(prompt);
      const Ai = result.response.text() || "No response from AI.";
      console.log(Ai);
      setPreviousChat((prev) =>
        prev.map((chat, index) =>
          index === prev.length - 1 ? { ...chat, AI: Ai, loading: false } : chat
        )
      );
    } catch (err) {
      setError(true);
      setPreviousChat((prev) =>
        prev.map((chat, index) =>
          index === prev.length - 1
            ? { ...chat, AI: "Hmm Something went wrong", loading: false }
            : chat
        )
      );
    }
  };

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [iconshow, setIconshow] = useState(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow((prev) => !prev);
    setIconshow(false);
  };
  const handleShow2 = (e) => {
    e.preventDefault();
    setShow2((prev) => !prev);
    setIconshow(false);
  };

  const handleIconShow = () => {
    setIconshow((prev) => !prev);
  };

  const handleQuestion = (id) => {
    setQuestion(id);
    setDisplay(true);
    handleText(id);
    setPreviousChat((prev) => [...prev, { user2: id }]);
  };

  console.log(previousChat);
  return (
    <div className="mother">
      <Header
        show={show}
        handleShow={handleShow}
        handleShow2={handleShow2}
        show2={show2}
        iconshow={iconshow}
        handleIconShow={handleIconShow}
      />
      <Body
        inputs={inputs}
        display={display}
        previousChat={previousChat}
        show={show}
        show2={show2}
        handleShow={handleShow}
        handleShow2={handleShow2}
        question={question}
        handleQuestion={handleQuestion}
        loading={loading}
        error={error}
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
