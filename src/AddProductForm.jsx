// Task 6- Create the AddProductForm Component

import { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

//Generates a new product with id, name, price, and description as an object
    const newProduct = {
        id: Date.now(), 
        name,
        price: parseFloat(price), 
        description
      };

      addProduct(newProduct);
  
//clears the submission form for another new product
      setName('');
      setPrice('');
      setDescription('');
    };
}; 

export default AddProductForm;