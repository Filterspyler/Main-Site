import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
        .then((response) => {
            setProducts(response.data);
        })
        .catch((error) => {
            console.error('There was an error fetching the data:', error);
        });
    }, []);j

    return (
        <div>
        <h1>Product List</h1>
        <ul>
            {products.map((product) => (
                <li key={product.id}>{product.name}</li>
            ))}
        </ul>
        </div>
    );
};

export default Product;
