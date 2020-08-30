const ENDPOINT = 'https://swapin.herokuapp.com'

async function register(data) {
  const parsedData = {
    picture: data.image,
    username: data.userName,
    password: data.password,
    email: data.email,
    phone_number: `+57${data.phone}`,
    first_name: data.firstName,
    last_name: data.lastName,
    gender: data.gender,
  }
  return fetch(`${ENDPOINT}/users/signup/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(parsedData),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.text())
      }
      return res.json()
    })
    .then((data) => data)
}

export default register
