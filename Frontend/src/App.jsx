// src/App.jsx
import React, { useState, useEffect } from 'react';
import ListItem from './components/ListItem';
// import { getProducts } from './api';
import './App.css';
import axios from "axios"

const App = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('Laptop');
  const [sortby, setSortby] = useState('');
  const [order, setOrder] = useState('asc');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [page, setPage] = useState(1);
  const [n, setN] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = { n, page, sortby, order, minPrice, maxPrice };
        const response=await axios.get("http://localhost:5000/api/v1/categories/Laptop/products");
        console.log(response);
        setProducts(response.data);
      
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category, n, page, sortby, order, minPrice, maxPrice]);

  return (
    <div className="App">
      <header>
        <h1>Top N Products</h1>
      </header>
      <main>
        <div className="filters">
          <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
          <input type="number" placeholder="Number of products" value={n} onChange={(e) => setN(e.target.value)} />
          <input type="number" placeholder="Page" value={page} onChange={(e) => setPage(e.target.value)} />
          <input type="text" placeholder="Sort by" value={sortby} onChange={(e) => setSortby(e.target.value)} />
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <input type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
          <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        </div>
        <div className="product-list">
          {products.map((product) => (
            <ListItem key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
