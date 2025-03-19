import "../styles/Navbar.css";

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/icm-logo.jpg" alt="Izzys Custom Millworks Logo" />
      </div>
      <div className="nav-links">
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("services");
          }}
        >
          Services
        </a>
        <a
          href="#gallery"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("gallery");
          }}
        >
          Gallery
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          About
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Contact
        </a>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("contact");
        }}
        className="cta-button"
      >
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
