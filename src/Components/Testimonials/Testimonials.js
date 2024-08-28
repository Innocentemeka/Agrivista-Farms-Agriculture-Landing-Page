import "./Testimonials.css";
import photo from "../Images/photo.png";
import { FaStar } from "react-icons/fa";

const Testimonials = ({ noOfStars = 5 }) => {
  return (
    <div className="testimonial">
      <div className="container">
        <h1>Testimonials</h1>
        <p>
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es <br /> un myth. Por scientie, musica, sport etc, litot Europa usa
          li sam vocabular.
        </p>
        <p className="p-small-screen">
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. Por scientie, musica, sport etc, litot Europa usa li sam
          vocabular.
        </p>
        <div className="card">
          <img src={photo} alt="photo" />
          <div className="card-right">
            <div className="star-rating">
              {[...Array(noOfStars)].map((_, index) => {
                index += 1;
                return <FaStar key={index} size={25} className="star" />;
              })}
            </div>
            <h3>Madeline Williamson</h3>
            <span>Forward Creative Manager</span>
            <h2>
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie, musica, sport etc, litot
              Europa usa li sam vocabular.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
