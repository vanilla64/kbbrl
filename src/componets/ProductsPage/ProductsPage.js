import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import Card from "../Card/Card"
import MainContent from "../MainContent/MainContent"
import { products } from "../../utils/utils"

function ProductsPage({ title }) {
  const [cards, setCards] = useState(products)
  let id = 1

  const transitions = useTransition(cards, {
    from: {
      opacity: 0,
      transform: `translate3d(0,50px,0)`
    },
    enter: {
      opacity: 1,
      transform: `translate3d(0,0,0)`
    },
    leave: {
      opacity: 0,
      transform: `translate3d(0,40px,0)`
    },
    delay: 200,
    trail: 200,
    config: config.molasses,
    keys: card => card.id
  })

  return (
    <MainContent title={title}>
      {
        transitions((props, card, key) =>
          <animated.div
            key={key} style={props}>
            <Card key={card.id} card={card}/>
          </animated.div>
        )
      }
    </MainContent>
  )
}

export default ProductsPage
