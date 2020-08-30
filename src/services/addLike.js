const ENDPOINT = 'https://swapin.herokuapp.com'

function getCategories(data) {
  const parsedData = {
    clothe_id: data.clotheId,
    type_like: data.typeLike,
    user_id: data.id,
  }
  return fetch(`${ENDPOINT}/clothes/like/`, {
    method: 'POST',
    headers: {
      'Authorization': `token ${data.token}`,
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

export default getCategories
