import "./Testimonials.css";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import People from "../Data/Data";
import data from "../Data/Data";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Testimonials = ({ noOfStars = 5 }) => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

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
        <div className="section-center">
          {People.map((item, indexPeople) => {
            const { id, name, title, quote } = item;
            let position = "nextSlide";
            if (indexPeople === index) {
              position = "activeSlide";
            }
            if (
              indexPeople === index - 1 ||
              (index === 0 && indexPeople === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position} key={id}>
                <img src={item.image} alt="" className="person-img" />
                <div className="card-right">
                  <div className="star-rating">
                    {[...Array(noOfStars)].map((_, index) => {
                      index += 1;
                      return <FaStar key={index} size={25} className="star" />;
                    })}
                  </div>
                  <h3>{name}</h3>
                  <span>{title}</span>
                  <h2>{quote}</h2>
                </div>
              </article>
            );
          })}

          <FaArrowAltCircleLeft
            className="prev"
            onClick={() => setIndex(index - 1)}
          />

          <FaArrowAltCircleRight
            className="next"
            onClick={() => setIndex(index + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
