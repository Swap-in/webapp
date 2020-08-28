import React, { useState } from 'react'
import './Select.scss'

function Select() {
  const OPTIONS = ['corbatas', 'zapatos', 'Pantalones', 'Playeras', 'Sombreros']
  const [option, setOption] = useState(OPTIONS[0])
  const handleChangeOptions = (e) => {
    e.preventDefault()
    setOption(e.target.value)
  }

  console.log(option)
  return (
    <form className='formSearch'>
      <select className='formSearch--Select' onChange={handleChangeOptions}>
        {OPTIONS.map((option) => <option key={option}>{option}</option>)}
      </select>
    </form>
  )
}

export default Select;
