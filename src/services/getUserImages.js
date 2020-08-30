const ENDPOINT = 'https://swapin.herokuapp.com'

function getUserImages(id, token) {
  return fetch(`${ENDPOINT}/users/list_clothes/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `token ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.text())
      return response.json()
    })
    .then((data) => data)
}

export default getUserImages
