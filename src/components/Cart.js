import React from 'react';
import { Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const Cart = ({ onClose }) => {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert(`Checkout functionality would be implemented here. Total: $${getTotalPrice().toFixed(2)}`);
  };

  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  return (
    <div>
      {items.length === 0 ? (
        <p className="text-muted text-center">Your cart is empty</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.product.id} className="cart-item border-bottom pb-3 mb-3">
              <div className="row align-items-center">
                <div className="col-3">
                  <img 
                    src={item.product.image} 
                    className="img-fluid rounded" 
                    alt={item.product.title}
                    style={{height: '60px', objectFit: 'contain'}}
                  />
                </div>
                <div className="col-6">
                  <h6 className="mb-1">{truncateText(item.product.title, 30)}</h6>
                  <p className="text-muted mb-1">${item.product.price}</p>
                  <div className="d-flex align-items-center">
                    <Button 
                      variant="outline-secondary" 
                      size="sm"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button 
                      variant="outline-secondary" 
                      size="sm"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="col-3 text-end">
                  <p className="fw-bold mb-1">${(item.product.price * item.quantity).toFixed(2)}</p>
                  <Button 
                    variant="outline-danger" 
                    size="sm"
                    onClick={() => removeItem(item.product.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="border-top pt-3 mt-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5>Total: ${getTotalPrice().toFixed(2)}</h5>
            </div>
            <Button variant="primary" className="w-100 mb-2" onClick={handleCheckout}>
              Checkout
            </Button>
            <Button variant="outline-danger" className="w-100" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
