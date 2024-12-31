import { FaArrowUp } from "react-icons/fa";
const Body = () => {
  return (
    <>
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

        <form>
          <textarea
            name="text"
            id="text"
            placeholder="Send a message"
          ></textarea>
          <div className="send">
            <FaArrowUp />
          </div>
        </form>
      </div>
    </>
  );
};

export default Body;
