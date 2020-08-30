const ENDPOINT = 'https://swapin.herokuapp.com'

async function deleteClothes(token, id) {
  return fetch(`${ENDPOINT}/user/clothes/${id}/`, {
    method: 'DELETE',
    headers: {
      'Authorization': `token ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.text())
      return res.status
    })
    .then((data) => data)
}

export default deleteClothes
