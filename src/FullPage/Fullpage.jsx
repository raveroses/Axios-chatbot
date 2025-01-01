import Body from "../Components/Body";
import Header from "../Components/Header";
import Input from "../Components/Input";

const Fullpage = ({ input, display, handleOnchange }) => {
  //   console.log(input, display, handleOnchange);
  return (
    <div className="mother">
      <Header />
      <Body input={input} display={display} handleOnChange={handleOnchange} />
      <Input input={input} display={display} handleOnChange={handleOnchange} />
    </div>
  );
};

export default Fullpage;
