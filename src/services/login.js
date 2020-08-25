const ENDPOINT = 'https://swapin.herokuapp.com'

async function login(data) {
  const parsedData = {
    username: data.userName,
    password: data.password,
  }
  // return console.log(JSON.stringify(parsedData))
  return fetch(`${ENDPOINT}/users/login/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(parsedData),
  })
    .then((res) => res.json())
    .then((data) => data)
}

export default login
