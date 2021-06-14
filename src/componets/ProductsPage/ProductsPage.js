import React from 'react'
import Card from "../Card/Card"
import MainContent from "../MainContent/MainContent"
import { products } from "../../utils/utils"

function ProductsPage({ title }) {
  return (
    <MainContent title={title}>
      { products.map(p => <Card key={p.id} card={p}/>) }
    </MainContent>
  )
}

export default ProductsPage
