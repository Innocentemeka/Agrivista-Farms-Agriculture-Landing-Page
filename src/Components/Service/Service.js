import "./Service.css";
import pencil from "../Images/pencil-square.png";
import groupIcon from "../Images/Group-icon.png";
import scoreIcon from "../Images/Score-icon.png";
import mediaIcon from "../Images/Media-icon.png";

const Service = () => {
  return (
    <div className="service">
      <div className="container">
        <div>
          <h1>Our service</h1>
          <p>
            Li Europan lingues es membres del sam familie. Lor <br /> separat
            existentie es un myth Por scientie, musica.
          </p>
          <p className="p-small-screen">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth Por scientie, musica.
          </p>
        </div>
        <div className="card-container">
          <div className="card">
            <img src={pencil} alt="icon" />
            <h3> Blog and Article Writing</h3>
          </div>

          <div className="card">
            <img src={groupIcon} alt="icon" />
            <h3> Website Content</h3>
          </div>

          <div className="card">
            <img src={scoreIcon} alt="icon" />
            <h3> Content Strategy and Consulting</h3>
          </div>

          <div className="card">
            <img src={mediaIcon} alt="icon" />
            <h3> Social Media Management</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
