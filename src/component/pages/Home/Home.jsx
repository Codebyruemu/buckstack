import React from 'react'
// import Carousel from '../Component/Carousel'

// CSS
import './Home.css'


import LOGO from '../../../assets/Img/logo.png'
import Button from '../../Button/Button'
import BottomNav from '../../Nav/Nav'
import Plans from '../../Plans/Plans'
import Carousel from '../../Carousel/Carousel'
const Home = () => {
  return (
    <div>
        <header className="container header-head">
            <img src={LOGO} alt='LOGO' />
        </header>

        <Carousel/>
        <Button />
        <Plans />
        <BottomNav />
    </div>
  )
}

export default Home