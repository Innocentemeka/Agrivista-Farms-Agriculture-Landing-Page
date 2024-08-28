import "./Product.css";
import rice from "../Images/Rice-photo.png";
import wheat from "../Images/Wheat-photo.png";
import pumpkin from "../Images/Pumpkin-photo.png";
import cabbage from "../Images/Cabbage-photo.png";
import { Link } from "react-scroll";

const Product = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="header">
          <h1>Our Featured Product</h1>
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
            <img src={rice} alt="photo" />
            <h3>Rice</h3>
            <p>
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth.
            </p>
          </div>
          <div className="card">
            <img src={wheat} alt="photo" />
            <h3>Wheat</h3>
            <p>
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth.
            </p>
          </div>
          <div className="card">
            <img src={pumpkin} alt="photo" />
            <h3>Pumpkin</h3>
            <p>
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth.
            </p>
          </div>
          <div className="card">
            <img src={cabbage} alt="photo" />
            <h3>Cabbage</h3>
            <p>
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth.
            </p>
          </div>
        </div>
        <Link>see all product</Link>
      </div>
    </div>
  );
};

export default Product;
