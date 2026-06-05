import "./About.css";
import about1 from "../../assets/Images/about1.png";
import about2 from "../../assets/Images/about2.png";
import vector from "../../assets/Images/Vector.png";
import design3 from "../../assets/Images/design3.png";
import design2 from "../../assets/Images/design2.png";
import design1 from "../../assets/Images/design1.png";
import design0 from "../../assets/Images/design0.png";

const About = () => {
  return (
    <section className="about">
        <img src={design0} alt="" className="about-design0" />
        <img src={design3} alt="" className="about-design3" />
        <img src={design2} alt="" className="about-design21" />
        <img src={design2} alt="" className="about-design22" />
        <img src={design1} alt="" className="about-design1" />
      <div className="about-top"> 

        <div className="about-top-content">

          <h2 className="about-title">
            <span className="vector-wrapper">
              Tomorrow
              <img src={vector} alt="" className="vector-line" />
            </span>{" "}
            should <br />
            be better than <span className="green-pill">today</span>
          </h2>

            <p className="about-description">
              We are a team of strategists, designers communicators,
              researchers. Together, we believe that progress only
              happens when you refuse to play things safe.
            </p>

            <button className="about-btn">
              Read more →
            </button>

        </div>

        <div className="about-top-image">
          <img src={about1} alt="About Us" />
        </div>

      </div>

      <div className="about-bottom">

        <div className="about-bottom-image">
          <img src={about2} alt="About Us" />
        </div>

        <div className="about-bottom-content">

        <h2 className="about-title">
          <span className="green-pill">See</span> how we can<br />
          help you{" "}
          <span className="vector-wrapper">
            progress
            <img src={vector} alt="" className="vector-line" />
          </span>
        </h2>

          <p className="about-description">
            We add a layer of fearless insights and action that
            allows change makers to accelerate their progress in
            areas such as brand, design, digital, comms and social
            research.
          </p>

          <button className="about-btn">
            Read more →
          </button>

        </div>

      </div>

    </section>
  );
};

export default About;