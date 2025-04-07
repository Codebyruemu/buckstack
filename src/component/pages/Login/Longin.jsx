import React from 'react'
import './Login.css'

import LOGO from '../../../assets/Img/logo.png'
import { Link } from 'react-router-dom'

const Longin = () => {
  return (
    <div>
        <div className="container">
            <div className="login-img">
                <center>
                    <img src={LOGO} alt='LOGO' />
                </center>
            </div>
            <div className="input">
                <div className="input-1">
                <p>Phone Number</p>
                <input placeholder="Please input you phone number" type="text" />
                </div>
                <div className="input-2">
                <p>Password</p>
                <input placeholder="Please input you phone number" type="text" />
                </div>
                <Link to="/home" className="login-button">Login Now</Link>
                <Link to='#'>No Account? Register</Link>
            </div>
        </div>

    </div>
  )
}

export default Longin