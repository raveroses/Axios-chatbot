import Chat from "./Chats";
const Body = ({ input, display, handleOnchange }) => {
  return (
    <div className="body-image-mother">
      <div className="body-image">
        <img src="/images/axionis.jpg" alt="axionis - image" />
        <h3>What can I help with?</h3>
        <div className="question">
          <div className="real-question">
            What’s the most popular programming language?
          </div>
          <div className="real-question">What’s the meaning of life?</div>
          <div className="real-question">
            What are some exercises for beginners?
          </div>
          <div className="real-question">Can you explain photosynthesis?</div>
          <div className="real-question">Tell me a motivational quote.</div>
        </div>
      </div>
      {/* <Chat /> */}
    </div>
  );
};

export default Body;
