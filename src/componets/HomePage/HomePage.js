import React, { useState, useEffect } from 'react'
import MainContent from "../MainContent/MainContent"
import './HomePage.sass'

function HomePage(props) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => { setIsVisible(true) }, 500)
  }, []);


  return (
    <MainContent>
      {
        isVisible &&
        <figure className="home-figure quote white-text">
          <h1 className="home-figure__title">
            Лучше иметь и не нуждаться,
            чем нуждаться и не иметь.
          </h1>
          <h4 className="home-figure__subtitle">— Чарльз Мартин.</h4>
        </figure>
      }
    </MainContent>
  )
}

export default HomePage
