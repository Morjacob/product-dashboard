import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'necklace', price: '$20', description: 'gold chain with heart pendant' },
    { id: 2, name: 'ring', price: '$30', description: 'silver coated with gem studs' },
  ]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');


  const addProduct = () => {
    if (name && price && description) {
      setProducts([
        ...products,
        { id: products.length + 1, name, price, description },
      ]);


      setName('');
      setPrice('');
      setDescription('');
    } else {
      alert('Empty field');
    }
  };

  return (
    <div className="App">
      <h1>Product Dashboard</h1>

    
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

  
      <div className="add-product-form">
        <h2>Add a Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>

  
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
