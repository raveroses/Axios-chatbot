import { FaArrowUp } from "react-icons/fa";
const Input = ({ input, display, handleOnchange }) => {
  return (
    <form>
      <textarea
        name="text"
        id="text"
        value={input}
        onChange={handleOnchange}
        placeholder="Send a message"
      ></textarea>
      <button className="send">
        <FaArrowUp />
      </button>
    </form>
  );
};
export default Input;
