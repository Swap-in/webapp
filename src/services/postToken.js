const ENDPOINT = 'https://swapin.herokuapp.com'

async function postToken(token) {
  const parsedData = {
    token,
  }
  // console.log(JSON.stringify(parsedData))
  return fetch(`${ENDPOINT}/users/verify/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(parsedData),
  })
    .then((res) => res.json())
    .then((data) => data)
}

export default postToken
