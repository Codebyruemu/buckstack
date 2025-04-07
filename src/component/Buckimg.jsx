import React from 'react'

import Buck from '../assets/Img/buck.png'
const Buckimg = () => {
  const Bg2={
    backgroundColor:'rgb(5,16,47)',  
  }
  return (
    <div style={Bg2} className='container'>
        <center>
          <img  src={Buck} alt="" />
        </center>
    </div>
  )
}

export default Buckimg