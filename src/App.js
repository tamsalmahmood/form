import React, { useState } from 'react';
import './App.css';


function UseStateForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [city, setcity] = useState('');

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}, Age: ${age}, City: ${city}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input 
          type="text" 
          value={name} 
          onChange={handleChange(setName)} 
        />
      </div>
      <div>
        <label>Email: </label>
        <input 
          type="email" 
          value={email} 
          onChange={handleChange(setEmail)} 
        />
      </div>
      <div>
        <label>Age: </label>
        <input 
          type="number" 
          value={age} 
          onChange={handleChange(setAge)} 
        />
      </div>
      <div>
        <label>City: </label>
        <input 
          type="text" 
          value={city} 
          onChange={handleChange(setcity)} 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UseStateForm;

