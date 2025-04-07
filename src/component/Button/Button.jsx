import React from 'react'
import './Button.css'

const Button = () => {
  return (
    <div className='container '>
        <div className="button">
            <div className="row">
                <div className="col-md-6 col-sm-3">
                    <button className="button1">Recharge</button>
                </div>
                <div className="col-md-6 col-sm-3">
                    <button className="button2">Withdraw</button>
                </div>
                <div className="col-md-6 col-sm-3">
                    <button className="button3">Check in</button>
                </div>
                <div className="col-md-6 col-sm-3">
                    <button className="button3">Mine</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Button