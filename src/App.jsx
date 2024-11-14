import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

function App() {
  // Default list of products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Laptop',
      price: 999.99,
      description: 'A powerful laptop for productivity and gaming.'
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 699.99,
      description: 'A sleek smartphone with a great camera.'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 199.99,
      description: 'Noise-cancelling headphones for the best sound experience.'
    }
  ]);

  // Function to add a new product
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
