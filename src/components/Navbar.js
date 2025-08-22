import React, { useState } from 'react';
import { Navbar as BSNavbar, Nav, Container, Offcanvas, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <>
      <BSNavbar bg="white" expand="lg" className="shadow-sm sticky-top">
        <Container>
          <BSNavbar.Brand as={Link} to="/" className="fw-bold text-primary">
            <i className="fas fa-shopping-bag me-2"></i>ProductHub
          </BSNavbar.Brand>
          
          <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
          
          <BSNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
            
            <div className="d-flex">
              <Button 
                variant="outline-primary" 
                className="position-relative"
                onClick={() => setShowCart(true)}
              >
                <i className="fas fa-shopping-cart"></i>
                {getTotalItems() > 0 && (
                  <Badge 
                    bg="danger" 
                    className="position-absolute top-0 start-100 translate-middle rounded-pill"
                  >
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </div>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>

      <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart onClose={() => setShowCart(false)} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
