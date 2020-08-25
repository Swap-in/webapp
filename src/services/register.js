const ENDPOINT = 'https://swapin.herokuapp.com'

async function register(
  userName, firstName, lastName, gender, phone, email, password,
) {
  const data = {
    username: userName,
    password,
    email,
    phone_number: `+57${phone}`,
    first_name: firstName,
    last_name: lastName,
    gender,
  }
  console.log('data to json', JSON.stringify(data))
  return fetch(`${ENDPOINT}/users/signup/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => console.log('Response', res))
    .catch((err) => console.error('Error', err.message))
}

export default register
