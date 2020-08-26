const ENDPOINT = 'https://swapin.herokuapp.com'

async function login(data) {
  const parsedData = {
    username: data.userName,
    password: data.password,
  }
  return fetch(`${ENDPOINT}/users/login/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(parsedData),
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.text())
      return res.json()
    })
    .then((data) => data)
}

export default login
