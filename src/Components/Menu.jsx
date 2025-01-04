import { IoMdContact } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";
import { icon } from "leaflet";
const Menu = ({ handleShow, handleShow2, iconshow }) => {
  return (
    <div className="menus" style={{ display: iconshow ? "block" : "none" }}>
      <div className="mehn" onClick={handleShow}>
        <IoMdContact className="iccon" />
        Developer
      </div>
      <div className="mehn" onClick={handleShow2}>
        <IoInformationCircleOutline className="iccon" />
        View details
      </div>
      <div>
        <FaPenToSquare className="iccon" />
        New chat
      </div>
    </div>
  );
};
export default Menu;
