import Chat from "./Chats";
import Question from "./Question";
const Body = ({ inputs, display, previousChat }) => {
  const questions = Question.map((question, index) => {
    return (
      <>
        <div className="real-question" key={{ index }}>
          {question.question}
        </div>
      </>
    );
  });
  return (
    <>
      {" "}
      <div className="body-image-mother">
        <div
          className="body-image"
          style={{ display: display ? "none" : "block" }}
        >
          <div className="center">
            <img src="/images/axionis.jpg" alt="axionis - image" />
            <h3>What can I help with?</h3>
          </div>
          <div className="question">{questions}</div>
        </div>
      </div>
      <Chat inputs={inputs} display={display} previousChat={previousChat} />
    </>
  );
};

export default Body;
