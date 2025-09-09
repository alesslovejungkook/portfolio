import React from "react";
import "./footer.css";

const Footer = () => {
  return (
   <footer class="footer">
  <div class="footer-container">
    <div class="footer-column">
      <h3>About Me</h3>
      <p>A dedicated student passionate about learning.</p>
    </div>
    <div class="footer-column">
      <h3>Contact</h3>
      <p>Email: alessandraaa@email.lcup.edu.ph</p>
      <p>Phone: +63 912 345 6789</p>
    </div>
    <div class="footer-column">
      <h3>Services</h3>
      <p>Java</p>
      <p>Student Support</p>
      <p>Workshops</p>
    </div>
    <div class="footer-column">
      <h3>Follow Me</h3>
      <p>Facebook</p>
      <p>Instagram</p>
      <p>Twitter</p>
    </div>
  </div>
</footer>


  );
};

export default Footer;
