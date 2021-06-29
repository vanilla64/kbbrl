import React from 'react'
import { Link, useRouteMatch, useHistory } from "react-router-dom"
import './Card.sass'

function Card({ card }) {
  const { id, title, description, images } = card
  const { path } = useRouteMatch()
  const history = useHistory()

  const handleClick = () => history.push(`${path}/${id}`)

  return (
    <div onClick={handleClick} className="product-card col s4 z-depth-4">
      <div className="card large grey darken-3">
        <div className="card-image">
          <img src={images[0]} alt={title}/>
          <span className="card-title grey-text text-darken-4">{title}</span>
        </div>
        <div className="card-content white-text">
          <p>{description}</p>
        </div>
        <div className="card-action">
          <Link className="blue-text" to={`${path}/${id}`}>Подробнее</Link>
        </div>
      </div>
    </div>
  )
}

export default Card
