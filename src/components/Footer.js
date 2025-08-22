import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5" id="contact">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>ProductHub</h5>
            <p>Your one-stop destination for quality products at great prices.</p>
            <div className="social-links">
              <a href="https://facebook.com" className="text-light me-3" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" className="text-light me-3" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" className="text-light me-3" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" className="text-light" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Contact Information</h5>
            <p><i className="fas fa-map-marker-alt me-2"></i>123 Business Street, Colombo, Sri Lanka</p>
            <p><i className="fas fa-phone me-2"></i>(+9411) 243 4567</p>
            <p><i className="fas fa-envelope me-2"></i>info@producthub.com</p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="/terms" className="text-light text-decoration-none">Terms of Service</a></li>
              <li><a href="/support" className="text-light text-decoration-none">Support</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center">
          <p>&copy; 2025 ProductHub. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
