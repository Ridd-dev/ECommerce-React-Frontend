import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const highlightText = (text, highlight) => {
  if (!highlight) return text;
  const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) => 
    regex.test(part) ? <mark key={i} className="bg-warning">{part}</mark> : part
  );
};

const ProductCard = ({ product, onProductClick, searchTerm = "" }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const button = e.currentTarget;
    
    button.disabled = true;
    const originalHTML = button.innerHTML;

    button.innerHTML = '<i class="fas fa-check"></i> Added';
    button.classList.remove('btn-primary');
    button.classList.add('btn-success');

    addItem(product);

    showSmallNotification(`Added "${truncateText(product.title, 25)}" to cart!`);

    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.classList.remove('btn-success');
      button.classList.add('btn-primary');
      button.disabled = false;
    }, 1500);
  };

  const showSmallNotification = (message) => {
    const existing = document.querySelector('.small-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'small-notification';
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
    <Card className="product-card h-100 shadow-sm" style={{ cursor: 'pointer' }}>
      <Card.Img 
        variant="top" 
        src={product.image} 
        alt={product.title}
        style={{ height: '250px', objectFit: 'contain', padding: '1rem', background: '#f8f9fa' }}
        onClick={() => onProductClick(product)}
      />
      <Card.Body className="d-flex flex-column">
        <Badge bg="secondary" className="mb-2 align-self-start">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Badge>
        <Card.Title style={{ fontSize: '1.1rem', height: '2.5rem', overflow: 'hidden' }}>
          {highlightText(product.title, searchTerm)}
        </Card.Title>
        <Card.Text className="text-primary fs-5 fw-bold">
          ${product.price}
        </Card.Text>
        <div className="mb-2">
          {generateStars(product.rating.rate)}
          <span className="text-muted ms-2">({product.rating.count})</span>
        </div>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0 pt-0">
        <div className="d-flex gap-2">
          <Button 
            variant="outline-primary" 
            size="sm" 
            onClick={() => onProductClick(product)}
            className="flex-grow-1"
          >
            View Details
          </Button>
          <Button 
            variant="primary" 
            size="sm"
            onClick={handleAddToCart}
            className="btn btn-primary"
          >
            <i className="fas fa-cart-plus"></i>
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
