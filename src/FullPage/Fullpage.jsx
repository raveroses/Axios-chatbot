import Body from "../Components/Body";
import Header from "../Components/Header";
import Input from "../Components/Input";

const Fullpage = ({
  inputs,
  display,
  handleOnchange,
  handleSubmission,
  previousChat,
}) => {
  //   console.log(input, display, handleOnchange);
  return (
    <div className="mother">
      <Header />
      <Body inputs={inputs} display={display} previousChat={previousChat} />
      <Input
        inputs={inputs}
        handleOnchange={handleOnchange}
        handleSubmission={handleSubmission}
      />
    </div>
  );
};

export default Fullpage;
