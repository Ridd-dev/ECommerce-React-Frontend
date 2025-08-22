import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const ProductModal = ({ product, show, onHide }) => {
  const { addItem } = useCart();

  if (!product) return null;

  const handleAddToCart = (e) => {
    const button = e.currentTarget;
    
    button.disabled = true;
    const originalHTML = button.innerHTML;

    button.innerHTML = '<i class="fas fa-check me-2"></i>Added!';
    button.classList.remove('btn-primary');
    button.classList.add('btn-success');

    addItem(product);

    showModalNotification(`Added "${truncateText(product.title, 25)}" to cart!`);

    setTimeout(() => {
      button.innerHTML = '<i class="fas fa-cart-plus me-2"></i>Add to Cart';
      button.classList.remove('btn-success');
      button.classList.add('btn-primary');
      button.disabled = false;
    }, 1500);

    setTimeout(() => {
      onHide();
    }, 2000);
  };

  const showModalNotification = (message) => {
    const existing = document.querySelector('.modal-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'modal-notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);

    setTimeout(() => {
      notification.classList.add('fade-out');
    }, 2000);
    
    setTimeout(() => {
      notification.remove();
    }, 2500);
  };

  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  const generateStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-warning"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-warning"></i>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-warning"></i>);
    }

    return stars;
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6}>
            <img 
              src={product.image} 
              className="img-fluid rounded" 
              alt={product.title}
              style={{width: '100%', height: '300px', objectFit: 'contain', background: '#f8f9fa'}}
            />
          </Col>
          <Col md={6}>
            <p className="text-muted text-uppercase fw-bold">{product.category}</p>
            <h4 className="text-primary fw-bold">${product.price}</h4>
            <div className="mb-3">
              {generateStars(product.rating.rate)}
              <span className="text-muted ms-2">({product.rating.count} reviews)</span>
            </div>
            <p className="text-muted">{product.description}</p>
            <Button 
              variant="primary" 
              size="lg" 
              className="w-100" 
              onClick={handleAddToCart}
            >
              <i className="fas fa-cart-plus me-2"></i>Add to Cart
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
