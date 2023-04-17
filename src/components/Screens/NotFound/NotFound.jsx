import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../Utils/Button'

const NotFound = () => {
  const [pageUrl, setPageUrl] = useState('')
  const comic = Math.floor(Math.random() * 2500)

  const navigate = useNavigate()

  fetch(`https://xkcd.com/${comic}/info.0.json`, {
    method: 'GET',
    mode: 'cors',
  })
    .then((res) => console.log(res))
    .then((image) => console.log(image))
    .catch((err) => console.log(err))

  return (
    <div>
      <h3 className="notfound__title">The memes we found along the way...</h3>
      <img src={pageUrl} alt="" />
      <Button to={navigate(-1)}>Go Back</Button>
    </div>
  )
}

export default NotFound
