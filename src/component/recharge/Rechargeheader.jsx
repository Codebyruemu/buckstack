import React from 'react'
import banner from '../../assets/banner.jpg'
import Recharge from './Recharge'

const Rechargeheader = () => {
  return (
    <div className='container'>
        <div className='row bg-success text-white pt-3 pb-2'>
            <div className='d-flex'> 
                <a href="#">
                    <i className="text-white col-1 bi bi-chevron-left"></i>
                </a>
                <p className="col-11 text-center fs-6 fw-bold">Recharge</p>
            </div>
        
        </div>
        <div className="row px-5 mb-3 align-items-center">
            <img src={banner} alt="" style={{height: '500px'}} />
        </div>
        <Recharge/>

    </div>
  )
}

export default Rechargeheader