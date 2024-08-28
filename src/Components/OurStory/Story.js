import "./Story.css";
import icon from "../Images/photo-1.png";

const Story = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="header">
          <h1>
            Our Passion for Agriculture Nurturing Growth and Sustaining the
            Future
          </h1>
          <p>
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. <br /> Por scientie, musica, sport etc, litot
            Europa usa li sam vocabular.
          </p>
          <p className="p-small-screen">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.
          </p>
          <button>Get Started</button>
        </div>
        <div className="img-container">
          <img src={icon} alt="icon" />
          <div>Since 1976</div>
        </div>
      </div>

      <div className="small-screen-row">
        <div className="header">
          <h1>
            Our Passion for Agriculture Nurturing Growth and Sustaining the
            Future
          </h1>
          <p>
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. <br /> Por scientie, musica, sport etc, litot
            Europa usa li sam vocabular.
          </p>
          <p className="p-small-screen">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.
          </p>
        </div>
        <div className="img-container">
          <img src={icon} alt="icon" />
          <div>Since 1976</div>
        </div>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Story;
