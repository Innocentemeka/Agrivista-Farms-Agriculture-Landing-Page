import { Link } from "react-scroll";
import "./Contact.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-left">
          <h1>AgriVista Farms</h1>
          <p>
            Li Europan lingues es membres del sam <br /> familie. Lor separat
            existentie
          </p>
          <p className="p-small-screen">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie
          </p>
          <div className="social-icons">
            <Link>
              <FaInstagram className="fa-icon" />
            </Link>
            <Link>
              <FaWhatsapp className="fa-icon" />
            </Link>
            <Link>
              <FaFacebook className="fa-icon" />
            </Link>
            <Link>
              <FaLinkedin className="fa-icon" />
            </Link>
          </div>
        </div>
        <div className="contact-right">
          <div className="pages">
            <div>
              <h2>Pages</h2>
            </div>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Product</Link>
            <Link>Blog</Link>
          </div>
          <div className="about">
            <div>
              <h2>About</h2>
            </div>
            <Link>Testimonials</Link>
            <Link>Our Service</Link>
            <Link>Contact Us</Link>
            <Link>Benefit</Link>
          </div>
        </div>
        <div className="small-screen-social-icons">
          <Link>
            <FaInstagram className="fa-icon" />
          </Link>
          <Link>
            <FaWhatsapp className="fa-icon" />
          </Link>
          <Link>
            <FaFacebook className="fa-icon" />
          </Link>
          <Link>
            <FaLinkedin className="fa-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
