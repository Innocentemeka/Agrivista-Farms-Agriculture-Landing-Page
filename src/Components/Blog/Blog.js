import "./Blog.css";
import icon1 from "../Images/Rectangle1.png";
import icon2 from "../Images/Rectangle2.png";
import icon3 from "../Images/Rectangle3.png";
import { Link } from "react-scroll";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="header">
          <h1>Our Blog</h1>
          <p>
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es <br /> un myth. Por scientie, musica, sport etc, litot
            Europa usa li sam vocabular.
          </p>
          <p className="p-small-screen">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.
          </p>
        </div>
        <div className="card-container">
          <div className="card-blog">
            <img src={icon1} alt="icon" />
            <div>
              <h3>Innovations for a Greener Future</h3>
              <p>
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth. Por scientie, musica.
              </p>
              <Link>Read More</Link>
            </div>
          </div>

          <div className="card-blog">
            <img src={icon2} alt="icon" />
            <div>
              <h3>The Power of Agricultural Analytics</h3>
              <p>
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth. Por scientie, musica.
              </p>
              <Link>Read More</Link>
            </div>
          </div>

          <div className="card-blog">
            <img src={icon3} alt="icon" />
            <div>
              <h3>Cultivating Sustainable and Resilient Farms</h3>
              <p>
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth. Por scientie, musica.
              </p>
              <Link>Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
