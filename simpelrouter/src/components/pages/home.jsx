import React, { useState } from 'react'

export const Home = () => {

  const intialState = {
    name: "",
    lastname: "",
    address: "",
    city: "",
    zipcode: "",
  };

  const [state, setState] = useState(intialState)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({ ...prev, [name]: value}));
  };

  const { name, lastname, address, city, zipcode } = state;

  return (
    <>
      <input type="text" name="name" value={name} onChange={handleChange} placeholder='enter name' /> <br />
      <input type="text" name="lastname" value={lastname} onChange={handleChange} placeholder='enter lastname' /> <br />
      <input type="text" name="address" value={address} onChange={handleChange} placeholder='enter address' /> <br />
      <input type="text" name="city" value={city} onChange={handleChange} placeholder='enter city' /> <br />
      <input type="number" name="zipcode" value={zipcode} onChange={handleChange} placeholder='enter zipcode' /> <br />
    
      Firstname: {name} <br />
      Lastname: {lastname} <br />
      Address: {address} <br />
      City: {city} <br />
      Zipcode: {zipcode} <br />
      <button onClick={() => setState(intialState)}>Reset</button>
    </>
  )
}
