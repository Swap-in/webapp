const ENDPOINT = 'https://swapin.herokuapp.com'

function registerService(
  firstName, lastName, gender, phone, email, password, confirmPassword,
) {
  if (password !== confirmPassword) {
    return console.log('las contraseñas no coinciden')
  }
  const number = `+57${phone}`
  return fetch(`${ENDPOINT}/users/signup/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(
      firstName, lastName, gender, number, email, password, confirmPassword,
    ),
  })
    .then((res) => console.log(res))
    .catch((err) => console.error('Error', err))
}

export default registerService
