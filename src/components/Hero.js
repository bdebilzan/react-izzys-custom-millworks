import "../styles/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img
        src="/images/image1.jpg"
        alt="Custom Cabinetry"
        className="hero-image"
      />
      <div className="hero-overlay">
        <h3>
          <em>
            Bringing Your Vision to Life – 15+ Years of Custom Cabinetry
            Experience.
          </em>
        </h3>
      </div>
    </div>
  );
}

export default Hero;
