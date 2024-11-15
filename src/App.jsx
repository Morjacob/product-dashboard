import { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

function App() {
  // State for managing the list of products
  const [products, setProducts] = useState([
    { id: 1, name: 'necklace', price: '$20', description: 'gold chain with heart pendant' },
    { id: 2, name: 'ring', price: '$30', description: 'silver coated with gem studs' },
  ]);

  // Function to add a new product to the list
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="app">
      <h1>Product List</h1>
      
      {/* Render the product list */}
      <ProductList products={products} />

      {/* Render the form to add new products */}
      <AddProductForm addProduct={addProduct} />
    </div>
  );
}

export default App;

