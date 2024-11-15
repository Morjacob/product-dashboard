import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'necklace', price: '$20', description: 'gold chain with heart pendant' },
    { id: 2, name: 'ring', price: '$30', description: 'silver coated with gem studs' },
  ]);


  const [count, setCount] = useState(0);

  return (
    <div>
  
      <ProductList products={products} />

    
      <AddProductForm addProduct={(product) => setProducts([...products, product])} />

 
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

