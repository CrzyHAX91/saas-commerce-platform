import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/products/')
      .then(response => setProducts(response.data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Producten</h1>
      <ul>
        {products.length > 0 ? products.map((product, index) => (
          <li key={index}>{product}</li>
        )) : <p>Geen producten beschikbaar.</p>}
      </ul>
    </div>
  );
}