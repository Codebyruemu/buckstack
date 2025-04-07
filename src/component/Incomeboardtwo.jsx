import React,{useState,useEffect} from 'react'


const Incomeboardtwo = () => {
    const [todayEarnings, setTodayEarnings] = useState(0)
    const [totalInvestment, setTotalInvestment] = useState(0)
    const [referalBonus, setReferalBonus] = useState(0)

    useEffect (()=>{

    }, [])
  return (
    <div>
      <div className="d-container-fluid d-sm-container my-3" >
      <div className="row ">
        <div className="d-flex text-white gap-2 gap-sm-5 align-items-center">
                <div className="col-4 card bg-dark text-white text-center p-1">
                <h6 className="card-title my-2">&#8358; {todayEarnings}</h6>
                <small className="card-subtitle fw-semibold mb-2">Total earnings </small>
                </div>

                <div className="col-3 card bg-dark text-white text-center p-1">
                <h6 className="card-title my-2">&#8358; {totalInvestment}</h6>
                <small className="card-subtitle fw-semibold mb-2">Total investment</small>
                </div>

                <div className="col-4 card bg-dark text-white text-center p-1">
                <h6 className="card-title my-2">&#8358; {referalBonus}</h6>
                <small className="card-subtitle fw-semibold mb-2">Referal Bonus</small>
                </div>
            </div>
      </div>
    </div>
    </div>
  )
}

export default Incomeboardtwo