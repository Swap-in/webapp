const ENDPOINT = 'https://swapin.herokuapp.com'

function getFeedData(token) {
  return fetch(`${ENDPOINT}/home/`, {
    method: 'GET',
    headers: {
      'Authorization': `token ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data)
}

export default getFeedData
