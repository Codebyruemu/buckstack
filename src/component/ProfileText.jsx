import React from 'react'

const ProfileText = () => {
    const Bg1={
        'backgroundColor':'#0f9c68',
    }
    const Bg2={
        backgroundColor:'hsl(241, 77.80%, 12.40%)',  
    }
    const Bg3={
        backgroundColor:'hsl(216, 69.20%, 25.50%)',
     
    }
  return (
    <div className="container" >
        <div className="row" style={Bg1}>
            <div className='col-12 text-center'>
                <p className='fs-2 fw-bold text-white'>DAILY INCOME DROPS EVERY 20 HOURS </p>
            </div>
        </div>
        
        <div className="row p-4" style={Bg2} >
            <div className="d-sm-flex align-items-center justify-content-around text-start fw-bold text-white" >
                <div className="col-md-5">
                    <p className='fs-3'>Welcome Bonus of N1000</p>
                    <p className='fs-3'>Daily Login Bonus of N200</p>
                    <p className='fs-3'>Withdrawal Charge 15%</p>
                </div>
                <div className="col-md-2">
                    <p className="fs-4 fst-italic text-white">Withdrawal time is 9am to 12pm And 3pm to 6pm Daily </p>
                </div>
            </div>
        </div>
        <div className="row" style={Bg3}>
            <div className="col-12 text-center" >
                <p className='fs-4 fw-bold text-white'>NOTE: You can earn without refering</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileText