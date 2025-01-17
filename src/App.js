import React, { useRef } from 'react';
import './App.css';


function UseRefForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);
  const addressRef = useRef(null);

  const handleChange = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const age = ageRef.current.value;
    const address = addressRef.current.value;
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}, Address: ${address}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const age = ageRef.current.value;
    const address = addressRef.current.value;
    alert(`Name: ${name}, Email: ${email}, Age: ${age}, Address: ${address}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input 
          type="text" 
          ref={nameRef} 
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email: </label>
        <input 
          type="email" 
          ref={emailRef} 
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age: </label>
        <input 
          type="number" 
          ref={ageRef} 
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address: </label>
        <input 
          type="text" 
          ref={addressRef} 
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UseRefForm;

