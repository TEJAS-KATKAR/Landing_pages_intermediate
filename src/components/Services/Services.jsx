import "./Services.css";
import vector from "../../assets/Images/vector.png";
import design5 from "../../assets/Images/design5.png";
import design4 from "../../assets/Images/design4.png";

const Services = () => {
  return (
    <section className="services">
       <img src={design4} alt="" className="services-design4" />
      <div className="services-heading">
        <h2>
          What we <span className="highlight">can</span>
          <br />

          <span className="vector-wrapper">
            offer
            <img src={vector} alt="" className="vector-line" />
          </span>{" "}
          you!
        </h2>
      </div>

      <div className="services-list">

        <div className="service-item">
          <p className="service-small">
            Office of multiple
            <br />
            interest content
          </p>

          <h3 className="service-title">
            Collaborative & partnership
          </h3>

          <span className="service-arrow">→</span>
        </div>

        <div className="service-item">
          <p className="service-small">
            The hanger US Air force
            <br />
            digital experimental
          </p>

          <h3 className="service-title">
            We talk about our weight
          </h3>

          <span className="service-arrow">→</span>
        </div>

        <div className="service-item">
          <img src={design5} alt="" className="service-design5" />

          <p className="service-small">
            Delta faucet content,
            <br />
            social, digital
          </p>

          <h3 className="service-title">
            Piloting digital confidence
          </h3>

          <span className="service-arrow">→</span>
        </div>

      </div>

    </section>
  );
};

export default Services;