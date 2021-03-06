const ENDPOINT = 'https://swapin.herokuapp.com'

async function getCategories(token) {
  return fetch(`${ENDPOINT}/clothes/get_categories/`, {
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
