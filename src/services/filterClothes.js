const ENDPOINT = 'https://swapin.herokuapp.com'

async function filterClothes(token, categoryId, userId) {
  return fetch(`${ENDPOINT}/clothes/search_clothes/${categoryId}/${userId}/`, {
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

export default filterClothes
