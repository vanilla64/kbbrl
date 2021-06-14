import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainContent from "../MainContent/MainContent"
import  warrantyLogo from '../../images/warranty-logo.png'
import { products } from "../../utils/utils"
import M from "materialize-css"

function Product(props) {
  let { id } = useParams()
  const product = products.find(p => p.id === id)
  const { title, subTitle, description, images } = product

  useEffect(() => {
    const zoomedImages = document.querySelectorAll('.materialboxed')
    M.Materialbox.init(zoomedImages)

    const carousel = document.querySelectorAll('.carousel')
    M.Carousel.init(carousel, {
      duration: 100,
      indicators: true,
      dist: -200
    })
  }, []);

  return (
    <MainContent goBackBtn={true} title={title}>
      <div className="row">
        <div className="col s6 carousel carousel-slider">
          {
            images.map((img, index) => (
              <div key={index} className="carousel-item">
                <img
                  style={{padding: 0}}
                  className="materialboxed col s12"
                  data-caption={subTitle}
                  src={img} alt={title} />
              </div>
            ))
          }
        </div>
        <div className="col s6">
          <p style={{marginTop: 0}} className="grey-text text-lighten-3">{description}</p>
          <img
            className="right"
            style={{width: '110px', height: '110px', opacity: '.6',}}
            src={warrantyLogo} alt="Warranty"/>
        </div>
      </div>
    </MainContent>
  )
}

export default Product
