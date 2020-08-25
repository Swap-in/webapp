import React, { useState } from 'react'
import Input from '../../Components/input'
import Button from '../../Components/button'

function Token() {

  const [token, setToken] = useState('')

  const handleToken = (e) => {
    e.preventDefault();
    alert(token)
  }

  return (
    <>
      <h1>Token</h1>
      <Input
        type='text'
        name='token'
        className='Login--input'
        onChange={(e) => setToken(e.target.value)}
      />
      <Button
        title='INICIAR SESIÓN'
        className='Login--button'
        onClick={handleToken}
      />
    </>
  )
}

export default Token
