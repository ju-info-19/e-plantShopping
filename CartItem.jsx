import React from 'react';
import './CartItem.css';

const CartItem = ({ cartItems, updateQuantity, removeItem, continueShopping }) => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <h2>🛒 Your cart is empty</h2>
                <button className="continue-shopping-btn" onClick={continueShopping}>
                    🌿 Continue Shopping
                </button>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h1>🛒 Shopping Cart</h1>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{item.name}</h3>
                            <p className="unit-price">{item.price} € each</p>
                        </div>
                        <div className="cart-item-actions">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <div className="cart-item-total">
                            {(item.price * item.quantity).toFixed(2)} €
                        </div>
                        <button className="remove-btn" onClick={() => removeItem(item.id)}>🗑️ Remove</button>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3>Total: {totalPrice.toFixed(2)} €</h3>
                <button className="checkout-btn" onClick={() => alert('🔄 Checkout feature coming soon!')}>
                    💳 Proceed to Checkout (Coming Soon)
                </button>
                <button className="continue-shopping-btn" onClick={continueShopping}>
                    🌿 Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default CartItem;