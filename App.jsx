import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

const App = () => {
    const [currentPage, setCurrentPage] = useState('landing');
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            setCartItems(prev => prev.filter(item => item.id !== id));
        } else {
            setCartItems(prev =>
                prev.map(item => (item.id === id ? { ...item, quantity } : item))
            );
        }
    };

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    // Page d'accueil avec "Get Started"
    if (currentPage === 'landing') {
        return (
            <div className="landing-container">
                <h1>🌿 Welcome to Paradise Nursery</h1>
                <p>Discover our collection of indoor plants for a greener home.</p>
                <button className="btn-get-started" onClick={() => setCurrentPage('products')}>
                    🚀 Get Started
                </button>
            </div>
        );
    }

    return (
        <div className="app-container">
            <nav className="navbar">
                <h2>🌿 Paradise Nursery</h2>
                <ul className="nav-links">
                    <li><a href="#" onClick={() => setCurrentPage('products')}>🏠 Home</a></li>
                    <li><a href="#" onClick={() => setCurrentPage('about')}>📖 About Us</a></li>
                    <li><a href="#" onClick={() => setCurrentPage('cart')}>🛒 Cart</a></li>
                </ul>
                <div className="cart-icon" onClick={() => setCurrentPage('cart')}>
                    🛒
                    {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                </div>
            </nav>

            {currentPage === 'products' && <ProductList addToCart={addToCart} />}
            {currentPage === 'cart' && (
                <CartItem
                    cartItems={cartItems}
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
                    continueShopping={() => setCurrentPage('products')}
                />
            )}
            {currentPage === 'about' && <AboutUs />}
        </div>
    );
};

export default App;