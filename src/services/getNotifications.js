const ENDPOINT = 'https://swapin.herokuapp.com'

function getCategories(token, id) {
  return fetch(`${ENDPOINT}/clothes/notification_user/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `token ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.text())
      return res.json()
    })
    .then((data) => data)
}

export default getCategories
