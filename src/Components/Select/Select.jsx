import React, { useState } from 'react'
import './Select.scss'
import { useHistory, useLocation } from 'react-router-dom'

const OPTIONS = ['corbatas', 'zapatos', 'Pantalones', 'Playeras', 'Sombreros']

function Select() {
  const history = useHistory()
  const location = useLocation()
  const [options, setOptions] = useState(OPTIONS[0])
  const handleChangeOptions = (e) => {
    e.preventDefault()
    setOptions(e.target.value)
    history.push(`${location.pathname}/${options}`)
  }

  return (
    <form className='formSearch'>
      <select className='formSearch--Select' onChange={handleChangeOptions} value={options}>
        {OPTIONS.map((option) => <option key={option}>{option}</option>)}
      </select>
    </form>
  )
}

export default Select;
