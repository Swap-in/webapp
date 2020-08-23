import React, { useState } from 'react'
import './Select.scss'

function Select() {
  const [state, setState] = useState({
    value: 'corbatas',
  })
  function handleChange(event) {
    setState({ value: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Your favorite flavor is: ${state.value}`);
  }
  return (
    <form className='formSearch' onSubmit={handleSubmit}>
      <select className='formSearch--Select' onChange={handleChange}>
        <option value='Zapatos'>Zapatos</option>
        <option value='Pantalones'>Pantalones</option>
        <option value='Playeras'>Playeras</option>
        <option value='Sombreros'>Sombreros</option>
      </select>
      {/* <input type='submit' value='Submit' /> */}
    </form>
  )
}

export default Select;
