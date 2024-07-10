import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <section className="about-hero">
        <div className="hero-content">
          <h1>About NovaSport</h1>
          <p>Your Partner in Sports and Fitness</p>
        </div>
        <div className="hero-image">
        <img src={`${process.env.PUBLIC_URL}/assets/ronaldo.jpg`} alt="Contact Us" />
        </div>
      </section>

      <section className="about-history">
        <h2>----------   Our History   ----------</h2>
        <p>NovaSport was founded in 2020 with the mission to support athletes and fitness enthusiasts around the world. Our aim is to provide top-quality sports equipment and apparel to help you achieve your fitness goals.</p>
        <p>Since our inception, we have become a trusted brand in the sports industry, known for our dedication to quality, innovation, and customer satisfaction.</p>
      </section>

      <section className="about-mission">
        <h2> ---------   Our Mission   ----------</h2>
        <p>At NovaSport, our mission is to empower individuals to excel in their sports and fitness endeavors by offering exceptional products and outstanding customer service. We believe in making fitness accessible to everyone, regardless of their background or experience level.</p>
      </section>

      <section className="about-values">
        <h2>----------   Our Values   ----------</h2>
        <ul>
          <li><strong>Quality:</strong> We are dedicated to providing the highest quality products to our customers.</li>
          <li><strong>Innovation:</strong> We continuously strive to innovate and enhance our product range.</li>
          <li><strong>Customer Satisfaction:</strong> Our customers are at the core of everything we do, and their satisfaction is our top priority.</li>
          <li><strong>Accessibility:</strong> We believe in making fitness accessible to everyone and work hard to make our products affordable and available to all.</li>
        </ul>
      </section>

      <section className="about-team">
        <h2>----------   Meet Our Team   -----------</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={`${process.env.PUBLIC_URL}/assets/1.jpg`} alt="Team Member 1" />
            <h3>Vini Jr.</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={`${process.env.PUBLIC_URL}/assets/3.webp`} alt="Team Member 2" />
            <h3>Mbappe Kylian</h3>
            <p>Chief Operating Officer</p>
          </div>
          <div className="team-member">
            <img src={`${process.env.PUBLIC_URL}/assets/6.webp`} alt="Team Member 3" />
            <h3>Rodrygoat</h3>
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>

      <section className="about-achievements">
        <h2>----------   Our Achievements    -----------</h2>
        <ul>
          <li>Trusted by over 15,000 customers worldwide</li>
          <li>Recipient of the Best Sports Brand award in 2022</li>
          <li>Over 150 innovative sports products developed</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
