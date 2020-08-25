const ENDPOINT = 'https://swapin.herokuapp.com'

async function postToken(token) {
  await fetch(`${ENDPOINT}/users/verify/`, {
    method: 'POST',
  })
  console.log(token)
}

export default postToken
