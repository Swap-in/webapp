// const ENDPOINT = 'https://swapin.herokuapp.com'

async function addClothes(data, images, id) {
  const parsedData = {
    title: data.title,
    description: data.description,
    brand: data.brand,
    category_id: data.clotheType,
    size: data.size,
    gender: data.gender,
    user_id: id,
    picture_1: images[0],
    picture_2: images[1] || null,
    picture_3: images[2] || null,
    picture_4: images[3] || null,
    picture_5: images[4] || null,
  }
  console.log(JSON.stringify(parsedData))
  // return fetch(`${ENDPOINT}/user/clothes`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
  //   body: JSON.stringify(parsedData),
  // })
  //   .then((res) => {
  //     if (!res.ok) throw new Error(res.text())
  //     return res.json()
  //   })
  //   .then((data) => data)
}

export default addClothes
