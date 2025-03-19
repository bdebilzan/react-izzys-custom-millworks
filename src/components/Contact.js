import { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="contact">
      <h2>Contact</h2>

      <div className="contact-details">
        <p>
          <i className="fas fa-map-marker-alt"></i> 95210 Overseas Highway, Key
          Largo, Florida, 33037
        </p>
        <p>
          <i className="fas fa-phone"></i> (305) 923-5295
        </p>
        <p>
          <i className="fas fa-envelope"></i> izzyscustommillwork@gmail.com
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
