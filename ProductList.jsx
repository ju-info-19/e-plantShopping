import React, { useState } from 'react';
import './ProductList.css';

const productsData = {
    '🌿 Green Plants': [
        { id: 1, name: 'Monstera Deliciosa', price: 29.99, image: 'https://images.unsplash.com/photo-1614594978190-02fd0ec3d9de?w=200', category: 'Green Plants' },
        { id: 2, name: 'Ficus Elastica', price: 24.99, image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=200', category: 'Green Plants' },
        { id: 3, name: 'Calathea', price: 34.99, image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=200', category: 'Green Plants' },
        { id: 4, name: 'Philodendron', price: 19.99, image: 'https://images.unsplash.com/photo-1614594978190-02fd0ec3d9de?w=200', category: 'Green Plants' },
        { id: 5, name: 'Pothos', price: 15.99, image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=200', category: 'Green Plants' },
        { id: 6, name: 'Fern', price: 22.99, image: 'https://images.unsplash.com/photo-1614594978190-02fd0ec3d9de?w=200', category: 'Green Plants' },
    ],
    '🌸 Flowering Plants': [
        { id: 7, name: 'Orchid', price: 34.99, image: 'https://images.unsplash.com/photo-1602757551848-8a6e7e6d8e2c?w=200', category: 'Flowering Plants' },
        { id: 8, name: 'Anthurium', price: 27.99, image: 'https://images.unsplash.com/photo-1602757551848-8a6e7e6d8e2c?w=200', category: 'Flowering Plants' },
        { id: 9, name: 'Peace Lily', price: 24.99, image: 'https://images.unsplash.com/photo-1602757551848-8a6e7e6d8e2c?w=200', category: 'Flowering Plants' },
        { id: 10, name: 'Hibiscus', price: 19.99, image: 'https://images.unsplash.com/photo-1602757551848-8a6e7e6d8e2c?w=200', category: 'Flowering Plants' },
        { id: 11, name: 'Bougainvillea', price: 29.99, image: 'https://images.unsplash.com/photo-1602757551848-8a6e7e6d8e2c?w=200', category: 'Flowering Plants' },
        { id: 12, name: 'Jasmine', price: 21.99, image: 'https://images.unsplash.com/photo-1602757551848-8a6e7e6d8e2c?w=200', category: 'Flowering Plants' },
    ],
    '🌵 Succulents': [
        { id: 13, name: 'Aloe Vera', price: 19.99, image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=200', category: 'Succulents' },
        { id: 14, name: 'Cactus', price: 14.99, image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=200', category: 'Succulents' },
        { id: 15, name: 'Echeveria', price: 12.99, image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=200', category: 'Succulents' },
        { id: 16, name: 'Jade Plant', price: 17.99, image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=200', category: 'Succulents' },
        { id: 17, name: 'Haworthia', price: 11.99, image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=200', category: 'Succulents' },
        { id: 18, name: 'Sedum', price: 13.99, image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=200', category: 'Succulents' },
    ],
};

const ProductList = ({ addToCart }) => {
    const [addedItems, setAddedItems] = useState({});

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedItems(prev => ({ ...prev, [product.id]: true }));
    };

    return (
        <div className="product-list-container">
            <h1>🌱 Our Plants</h1>
            {Object.keys(productsData).map(category => (
                <div key={category} className="category-section">
                    <h2>{category}</h2>
                    <div className="products-grid">
                        {productsData[category].map(product => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p className="price">{product.price} €</p>
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    disabled={addedItems[product.id]}
                                    className="add-to-cart-btn"
                                >
                                    {addedItems[product.id] ? '✅ Added' : '🛒 Add to Cart'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;