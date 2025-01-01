import Body from "../Components/Body";
import Header from "../Components/Header";
import Input from "../Components/Input";

const Fullpage = ({ inputs, display, handleOnchange, handleSubmission }) => {
  //   console.log(input, display, handleOnchange);
  return (
    <div className="mother">
      <Header />
      <Body input={inputs} display={display} handleOnChange={handleOnchange} />
      <Input
        inputs={inputs}
        display={display}
        handleOnchange={handleOnchange}
        handleSubmission={handleSubmission}
      />
    </div>
  );
};

export default Fullpage;
