import React from 'react'

import './Plans.css'
import LOGO from '../../assets/Img/logo.png'

const Plans = () => {

const datas = [
  {
    id : 1,
    type : "BSVIP 1",
    daily_profit : 750,
    price : 3000,
  },
  {
    id : 2,
    type : "BSVIP 2",
    daily_profit : 1500,
    price : 6000,
  },
  {
    id : 3,
    type : "BSVIP 3",
    daily_profit : 2500,
    price : 10000,
  },
  {
    id : 4,
    type : "BSVIP 4",
    daily_profit : 5000,
    price : 20000,
  },
  {
    id : 5,
    type : "BSVIP 5",
    daily_profit : 7500,
    price : 30000,
  },
  {
    id : 6,
    type : "BSVIP 6",
    daily_profit : 12500,
    price : 50000,
  },
  {
    id : 7,
    type : "BSVIP 7",
    daily_profit : 17500,
    price : 70000,
  },
  {
    id : 8,
    type : "BSVIP 8",
    daily_profit : 25000,
    price : 100000,
  },
  {
    id : 9,
    type : "BSVIP 9",
    daily_profit : 50000,
    price : 200000,
  },
  {
    id : 10,
    type : "BSVIP 10",
    daily_profit : 125000,
    price : 500000,
  },
  {
    id : 11,
    type : "BSVIP 11",
    daily_profit : 250000,
    price : 1000000,
  },
  ]
  return (
    <div className='container' id='plans'>
      <h3>Our Plans</h3>
      {
        datas.map((data) => (
          <div className='the-plans'>
            <center className="mt-3">
              <div key={data?.id} className="plans">
                <div className="row">
                  <div className="p-head">
                    <h3>{data.type}</h3>
                    <button>Join Now</button>
                  </div>
                  <div className="col-md-3 img">
                    <img src={LOGO} alt />
                  </div>
                  <div className="col-md-3">
                    <p>Duration</p>
                    <h5>30 Days</h5>
                  </div>
                  <div className="col-md-3">
                    <p>Daily Profit</p>
                    <h5>{data.daily_profit}</h5>
                  </div>
                  <div className="col-md-3">
                    <p>Price</p>
                    <h5>{data.price}</h5>
                  </div>
                </div>
              </div>
            </center>

          </div>
        ))
      }
    </div>
  )
}

export default Plans