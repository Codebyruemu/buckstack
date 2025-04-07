import React from 'react'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'


// Css
import './Carousel.css'

// Images
import slide1 from '../../assets/Img/images (1).jpeg'
import slide2 from '../../assets/Img/images (2).jpeg'

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselId"
        className="carousel slide container mt-1"
        data-bs-ride="carousel"
        data-bs-interval="3000" // auto slide every 3s
      >
        <div className="carousel-inner  card-img ">
          <center>
            <div className="carousel-item active">
              <img src={slide1} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100" alt="Slide 2" />
            </div>
          </center>
        </div>
      </div>
    </div>
  )
}

export default Carousel
