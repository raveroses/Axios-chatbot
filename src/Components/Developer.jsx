import { FaTimesCircle } from "react-icons/fa";

const Developer = ({ show, handleShow }) => {
  return (
    <div className="developer" style={{ display: show ? "block" : "none" }}>
      <div className="cancel" onClick={handleShow}>
        <FaTimesCircle />
      </div>
      <div className="developer-image">
        <img src="images/developer.JPG" alt="developer-image" />
        <div className="developer-name">
          <h3>TitilopeNode</h3>
        </div>
      </div>
      <div className="contents">
        <p>
          {" "}
          I'm Odekunle Waris but also known as TitilopeNode. I'm a creative web
          developer with lot of passion for tech.
        </p>
        <p>
          I design beautiful and responsive web interface while also paying
          close attention to user experience thus making vistors addicted to the
          websites I build.
        </p>
        <p>
          I'm availabe for any job opportunity as a frontend developer as well
          as internships and freelance projects.
        </p>
      </div>
      <div className="links">
        {" "}
        <p>
          Github profile:{" "}
          <a href="https://github.com/raveroses">
            https://github.com/raveroses
          </a>
        </p>
        <p>
          My personal website:{" "}
          <a href="https://portfolio-nu-red-23.vercel.app/">
            https://portfolio-nu-red-23.vercel.app/
          </a>
        </p>
      </div>
    </div>
  );
};

export default Developer;
