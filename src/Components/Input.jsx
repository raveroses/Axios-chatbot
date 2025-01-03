import { FaArrowUp } from "react-icons/fa";
const Input = ({ inputs, handleOnchange, handleSubmission }) => {
  return (
    <form onSubmit={handleSubmission}>
      <textarea
        name="user"
        onChange={handleOnchange}
        value={inputs?.user}
        placeholder="Send a message"
      ></textarea>
      <button className="send">
        <FaArrowUp />
      </button>
    </form>
  );
};
export default Input;
