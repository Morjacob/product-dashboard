//Task 2- Create the App Component

import { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

function App() {
  // default product list
  const [products, setProducts] = useState([
    { id: 1, name: 'Necklace', price: '20', description: 'Gold chain with heart pendant' },
    { id: 2, name: 'Ring', price: '30', description: 'Silver coated with gem studs' },
  ]);

  // function that adds new products to the list
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="app">
      <h1>Product List</h1>
      
 
      <ProductList products={products} />


      <AddProductForm addProduct={addProduct} />
    </div>
  );
}

export default App;

