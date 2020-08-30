import React, { useState, useEffect, useContext } from 'react'
import './Select.scss'
import getCategories from '../../services/getCategories'
import UserContext from '../../context'

function Select() {
  const { token } = useContext(UserContext)
  const [options, setOptions] = useState()
  const [option, setOption] = useState('cabeza')

  const handleChangeOptions = (e) => {
    e.preventDefault()
    setOption(e.target.value)
  }

  useEffect(() => {
    getCategories(token)
      .then((data) => setOptions(data))
  }, [token])
  console.log(option)
  //renderizar prendas desde aquí con la variable option

  return (
    <form className='formSearch'>
      <select className='formSearch--Select' onChange={handleChangeOptions}>
        {options?.map((option) => (
          <option key={option.id}>{option.description}</option>))}
      </select>
    </form>
  )
}

export default Select;
