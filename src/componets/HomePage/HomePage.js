import React from 'react'
import MainContent from "../MainContent/MainContent"

function HomePage(props) {
  return (
    <MainContent>
      <figure className="quote white-text">
        <h1>
          Лучше иметь и не нуждаться,
          чем нуждаться и не иметь.
        </h1>
        <h4>— Чарльз Мартин.</h4>
      </figure>
    </MainContent>
  )
}

export default HomePage
