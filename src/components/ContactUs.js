import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us">
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you!</p>
        </div>
        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/assets/contact-hero.jpg`} alt="Contact Us" />
        </div>
      </section>

      <section className="contact-info">
        <h2>-------------  Contact Information  ------------</h2>
        <p>If you have any questions, feel free to reach out to us using the contact details below:</p>
        <ul>
          <li><strong>Email:</strong> NovaSport@gmail.com</li>
          <li><strong>Phone:</strong> +1 777 777 7777</li>
          <li><strong>Address:</strong> 1234 drari Street, Ottawa, ON K1A 4B1, Canada</li>
        </ul>
      </section>

      <section className="contact-form-section">
        <h2>-------------   Send Us a Message   --------------</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="contact-map">
        <h2>--------------   Our Location   ----------------</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22748.857570765337!2d-75.70812003818003!3d45.42110645075559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04ff0a50745b%3A0x4b1d4905c5bfe0e1!2sFitness%20Street%2C%20Ottawa%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1612330441536!5m2!1sen!2sus"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Our Location"
        ></iframe>
      </section>
    </div>
  );
}

export default ContactUs;
