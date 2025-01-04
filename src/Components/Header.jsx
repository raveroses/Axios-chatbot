import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from "../Components/Menu";
const Header = ({ handleShow, handleShow2 }) => {
  return (
    <>
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
          <BsThreeDotsVertical className="real-icon" />
        </div>
      </div>
      <Menu handleShow={handleShow} handleShow2={handleShow2} />
    </>
  );
};
export default Header;
