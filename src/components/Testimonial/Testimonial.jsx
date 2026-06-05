import "./Testimonial.css";
import vector from "../../assets/Images/Vector.png";
const images = import.meta.glob("../../assets/Peoples/*.png", {
  eager: true,
});

const Testimonial = () => {
  return (
    <section className="testimonial">

      <h2 className="testimonial-title">
        <span className="highlight">What</span> our customer
        <br />
        says{" "}
        <span className="vector-wrapper">
          About Us
          <img src={vector} alt="" className="vector-line" />
        </span>
      </h2>

      <div className="testimonial-content">

        <div className="testimonial-left">
                  <img src={images["../../assets/Peoples/person1.png"].default} alt="Person 1" />
                  <img src={images["../../assets/Peoples/person2.png"].default} alt="Person 2" />
                  <img src={images["../../assets/Peoples/person3.png"].default} alt="Person 3" />
                  <img src={images["../../assets/Peoples/person4.png"].default} alt="Person 4" />
                </div>

          <div className="testimonial-card">

            <div className="quote-top">❝</div>

            <p>
              Elementum delivered the site within the timeline
              as they requested. Inthe end, the client found a
              50% increase in traffic within days since its launch.
              They also had an impressive ability to use technologies
              that the company hasnt used, which have also proved to
              be easy to use and reliable.
            </p> 

            <div className="quote-bottom">❞</div>

          </div>

          <div className="testimonial-right">
                <img src={images["../../assets/Peoples/person5.png"].default} alt="Person 5" />
                <img src={images["../../assets/Peoples/person6.png"].default} alt="Person 6" />
                <img src={images["../../assets/Peoples/person7.png"].default} alt="Person 7" />
                <img src={images["../../assets/Peoples/person8.png"].default} alt="Person 8" />
          </div>

      </div>

    </section>
  );
};

export default Testimonial;