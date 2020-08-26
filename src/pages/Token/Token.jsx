import React, { useState } from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import Input from '../../Components/input'
import Button from '../../Components/button'
import postToken from '../../services/postToken'

function Token() {

  const [token, setToken] = useState('')
  const history = useHistory()

  const handleToken = (e) => {
    e.preventDefault();
    postToken(token)
      .then((data) => alert(data.message))
      .then(() => history.push('/upload'))
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
        disabled={!token}
      />
    </>
  )
}

export default withRouter(Token)
