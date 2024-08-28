import "./Benefit.css";
import icon1 from "../Images/Vector.png";
import icon2 from "../Images/Vector (1).png";
import icon3 from "../Images/Vector (2).png";
import icon4 from "../Images/Vector (3).png";
import { FaArrowRight } from "react-icons/fa";

const Benefit = () => {
  return (
    <div className="benefit">
      <div className="conainer">
        <div className="left-benefit">
          <h1>
            The Benefits <br /> of Choosing Our Expertise
          </h1>
          <p>
            Li Europan lingues es membres del sam familie. <br /> Lor separat
            existentie es un myth. Por scientie, <br /> musica, sport etc, litot
            Europa usa li sam vocabular.
          </p>
          <button>
            Learn More <FaArrowRight />
          </button>
        </div>

        <div className="card">
          <div className="wrapper">
            <div className="img-wrapper">
              <img src={icon1} alt="icon" />
            </div>
            <div className="card-right">
              <h3>15+</h3>
              <p>Years Of Experience</p>
            </div>
          </div>

          <div className="wrapper">
            <div className="img-wrapper">
              <img src={icon2} alt="icon" />
            </div>
            <div className="card-right">
              <h3>40+</h3>
              <p>Product</p>
            </div>
          </div>

          <div className="wrapper">
            <div className="img-wrapper">
              <img src={icon3} alt="icon" />
            </div>
            <div className="card-right">
              <h3>2,458+</h3>
              <p>Satisfied Clients</p>
            </div>
          </div>

          <div className="wrapper">
            <div className="img-wrapper">
              <img src={icon4} alt="icon" />
            </div>
            <div className="card-right">
              <h3>20</h3>
              <p>Local Team Members</p>
            </div>
          </div>
        </div>
        <button className="btn-small-screen">
          Learn More <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Benefit;
