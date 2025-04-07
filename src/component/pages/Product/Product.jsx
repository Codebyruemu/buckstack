import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className="container">
            <div className='row bg-success text-white pt-3 pb-2'>
                <div className='d-flex'>
                    <Link to='/home'>
                        <i className="col-1 bi bi-chevron-left text-white"></i>
                    </Link> 
                    <p className="col-11 text-center fw-bold">Product</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Product