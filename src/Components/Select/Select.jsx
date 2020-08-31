import React, { useState, useEffect, useContext } from 'react'
import './Select.scss'
import getCategories from '../../services/getCategories'
import UserContext from '../../context'

function Select({ setOption }) {
  const { token } = useContext(UserContext)
  const [options, setOptions] = useState()

  const handleChangeOptions = (e) => {
    e.preventDefault()
    setOption(e.target.value)
  }

  useEffect(() => {
    getCategories(token)
      .then((data) => setOptions(data))
  }, [token])

  return (
    <form className='formSearch'>
      <select className='formSearch--Select' onChange={handleChangeOptions}>
        {options?.map((option) => (
          <option key={option.id} value={option.id}>{option.description}</option>))}
      </select>
    </form>
  )
}

export default Select;
