import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeaturedProducts();
  }, []);

  const loadFeaturedProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products?limit=6');
      setFeaturedProducts(response.data);
    } catch (error) {
      console.error('Error loading featured products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5 mb-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-4">Welcome to ProductHub</h1>
              <p className="lead mb-4">Discover amazing products at unbeatable prices. Shop with confidence and enjoy fast delivery.</p>
              <Button as={Link} to="/products" variant="light" size="lg">Shop Now</Button>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center" 
                className="img-fluid rounded shadow" 
                alt="Shopping" 
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-5">
        <Container>
          <h2 className="text-center mb-5">Featured Products</h2>
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <Row>
              {featuredProducts.map(product => (
                <Col key={product.id} lg={4} md={6} className="mb-4">
                  <ProductCard 
                    product={product} 
                    onProductClick={handleProductClick}
                  />
                </Col>
              ))}
            </Row>
          )}
          <div className="text-center mt-4">
            <Button as={Link} to="/products" variant="primary" size="lg">View All Products</Button>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features py-5 bg-light">
        <Container>
          <Row>
            <Col md={4} className="text-center mb-4">
              <i className="fas fa-shipping-fast text-primary fs-1 mb-3"></i>
              <h4>Fast Delivery</h4>
              <p>Quick and reliable shipping to your doorstep</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <i className="fas fa-shield-alt text-primary fs-1 mb-3"></i>
              <h4>Secure Payment</h4>
              <p>Your transactions are safe and secure</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <i className="fas fa-headset text-primary fs-1 mb-3"></i>
              <h4>24/7 Support</h4>
              <p>We're here to help whenever you need us</p>
            </Col>
          </Row>
        </Container>
      </section>

      <ProductModal 
        product={selectedProduct}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </>
  );
};

export default Home;
