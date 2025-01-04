import { FaTimesCircle } from "react-icons/fa";
const ViewDetail = ({ show2, handleShow2 }) => {
  return (
    <>
      <div
        className="developer dels"
        style={{ display: show2 ? "block" : "none" }}
      >
        <div className="cancel" onClick={handleShow2}>
          <FaTimesCircle />
        </div>
        <div className="developer-images">
          <img src="images/axionis.jpg" alt="logo-image" />
          <div className="app-name">
            <h3>Axionis</h3>
            <p> Friendly ai chatbot.</p>
          </div>
        </div>
        <div className="model">
          <p> Model info:</p>
          <ul>
            <li> gemini-1.5-flash</li>
            <li>generative model</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ViewDetail;
