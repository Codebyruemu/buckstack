import React from 'react'

const Baselinks = () => {
    const a={
        color: 'white',
        textDecoration: 'none'
    }
  return (
    <div className='container bg-dark text-white py-3 con'>
        <div className="row" >
                <a href="#" className='col-12 d-flex justify-content-between' style={a}>
                    <p className='fs-6'>Deposit Records</p>
                    <i className="bi bi-chevron-right"></i>                     
                    </a>
                <a href="#" className='col-12 d-flex justify-content-between' style={a}>
                    <p className='fs-6'>Withdrawal Records</p>
                    <i className="bi bi-chevron-right"></i>
                </a>
                <a href="#" className='col-12 d-flex justify-content-between'style={a}>
                    <p className='fs-6'>Investment Records</p>
                    <i className="bi bi-chevron-right"></i>             
                     </a>
                <a href="#" className='col-12 d-flex justify-content-between' style={a}>
                    <p className='fs-6'>Transaction Records</p>
                    <i className="bi bi-chevron-right"></i>              
                     </a>
                <a href="#" className='col-12 d-flex justify-content-between' style={a}>
                    <p className='fs-6'>Bank Records</p>
                    <i className="bi bi-chevron-right"></i>                
                    </a>
                <a href="#" className='col-12 d-flex justify-content-between' style={a}>
                    <p className='fs-6'>Reset Password</p>
                    <i className="bi bi-chevron-right"></i>                
                    </a>
                <a href="#" className='col-12 d-flex justify-content-between'style={a}>
                    <p className='fs-6 '>Telegram Group</p>
                    <i className="bi bi-chevron-right"></i>                
                    </a>
                <a href="#" className='col-12 d-flex justify-content-between' style={a}>
                    <p className='fs-6 '>Logout</p>
                    <i className="bi bi-chevron-right"></i>              
                     </a>
        </div>

    </div>
  )
}

export default Baselinks