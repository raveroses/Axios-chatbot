import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from "../Components/Menu";
import { useState } from "react";
const Header = ({ handleShow, handleShow2 }) => {
  const [iconshow, setIconshow] = useState(false);
  const handleIconShow = () => {
    setIconshow((prev) => !prev);
  };
  return (
    <div className="heads">
      <div className="header">
        <div className="logo">
          <div className="image">
            <img src="/images/axionis.jpg" alt="axionis - image" />
          </div>
          <div className="logo-name">
            <h3>Axionis</h3>
          </div>
        </div>
        <div className="icon">
          <BsThreeDotsVertical className="real-icon" onClick={handleIconShow} />
        </div>
      </div>
      <Menu
        handleShow={handleShow}
        handleShow2={handleShow2}
        iconshow={iconshow}
      />
    </div>
  );
};
export default Header;
