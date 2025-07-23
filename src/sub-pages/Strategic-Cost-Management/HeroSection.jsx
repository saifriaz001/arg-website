import PrimaryButton from '../reuseableComponents/PrimaryButton';
import SecondaryButton from '../reuseableComponents/SecondaryButton';
import heroImage from '../../assets/SubPages/StrategicPage-heroSection.png'; 

const HeroSection = () => {
  return (
    <section className="section-layout">
      <div className="container-7xl grid-two-col">
        {/* Left Content */}
        <div>
          <h1 className="heading-title">
            Delivering Certainty in <br /> Design, Cost & Time
          </h1>
          <p className="paragraph-lg">
            Architectural, Engineering & Consulting Solutions for Institutional Clients
          </p>

          <div className="btn-group">
            <PrimaryButton text="Schedule a Consultation" />
            <SecondaryButton text="Download Capabilities" />
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img src={heroImage} alt="Modern Building" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
