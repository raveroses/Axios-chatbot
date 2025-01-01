import { FaArrowUp } from "react-icons/fa";
const Input = ({ inputs, display, handleOnchange, handleSubmission }) => {
  return (
    <form onSubmit={handleSubmission}>
      <textarea
        name="text"
        onChange={handleOnchange}
        value={inputs}
        placeholder="Send a message"
      ></textarea>
      <button className="send">
        <FaArrowUp />
      </button>
    </form>
  );
};
export default Input;
