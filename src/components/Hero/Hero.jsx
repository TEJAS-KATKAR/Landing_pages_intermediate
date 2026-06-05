import "./Hero.css";
import people from "../../assets/Images/peoples.png";
import vector from "../../assets/Images/Vector.png";
import ellipse from "../../assets/Images/Ellipse.png";
import line from "../../assets/Images/Line1.png";
import line2 from "../../assets/Images/Line2.png";
const Hero = () => {
  return (
      <section className="hero">
          <img src={line} alt="" className="line1" />
          <img src={line2} alt="" className="line2" />

        <div className="hero-top">
        <img src={ellipse} alt="" className="hero-ellipse" />
        <h1 className="hero-title">
            The{" "}
            <span className="vector-wrapper">
              thinkers
              <img src={vector} alt="" className="vector-line" />
            </span>{" "}
            and <br />
            doers were ch<span className="highlight2">anging</span> <br />
            the <span className="highlight">status</span> Quo with
        </h1>

          <p className="hero-description">
            We are a team of strategists, designers communicators,
            researchers. Together, we believe that progress only
            happens when you refuse to play things safe.
          </p>

        </div>

        <div className="hero-bottom">
            <img src={people} alt="people" className="people" />
        </div>
        </section>
  );
};

export default Hero;