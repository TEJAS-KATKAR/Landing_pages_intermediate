import "./Footer.css";
import ellipse from "../../assets/Images/Ellipse.png";
import arrow from "../../assets/Images/Arrow.png";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">
        <img src={arrow} alt="" className="arrow-left" />
        <img src={arrow} alt="" className="arrow-right" />
        <img src={ellipse} alt="" className="footer-ellipse" />
        <h2 className="footer-title">
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p className="footer-subtitle">
          To make your stay special and even more memorable
        </p>

        <button className="footer-btn">
          Subscribe Now
        </button>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-links">

        <div className="footer-column">
          <h4>Company</h4>

          <a href="#">Home</a>
          <a href="#">Studio</a>
          <a href="#">Service</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer-column">
          <h4>Terms & Policies</h4>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Explore</a>
          <a href="#">Accessibility</a>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>

          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Youtube</a>
          <a href="#">Twitter</a>
        </div>

        <div className="footer-column">
          <h4>Terms & Policies</h4>

          <p>1498w Fulton ste, STE</p>
          <p>2D Chicago, IL 63667.</p>

          <p>(123) 456789000</p>

          <p>info@elementum.com</p>
        </div>

      </div>

      <p className="footer-copyright">
        ©2023 Elementum. All rights reserved
      </p>

    </footer>
  );
};

export default Footer;