import React, {useState} from 'react'

const Recharge = () => {
    const [amount, setAmount] = useState(0)

    function handleChange(amount){
        setAmount(amount)
    }
    
  return (
    <div className="container text-center mt-5">
        <div className="row align-items-center  ps-5">
            <p className="text-start text-success">Select Amount</p>
        </div>
        <div className="row gap-2 align-items-center  ps-5">
            <button className="col-3 btn border-success bg-white text-success" onClick={()=>handleChange(3000)}>&#8358;3000</button>
            <button className="col-3 btn border-success bg-white text-success" onClick={()=>handleChange(3000)}>&#8358;6000</button>
            <button className="col-3 btn border-success bg-white text-success" onClick={()=>handleChange(3000)}>&#8358;10000</button>
            <button className="col-3 btn border-success bg-white text-success" onClick={()=>handleChange(3000)}>&#8358;20000</button>
            <button className="col-3 btn border-success bg-white text-success" onClick={()=>handleChange(3000)}>&#8358;30000</button>
            <button className="col-3 btn border-success bg-white text-success" onClick={()=>handleChange(3000)}>&#8358;50000</button>
            <button className="col-3 btn border-success bg-white text-success" onClick={()=>handleChange(3000)}>&#8358;70000</button>
            <button className="col-3 btn border-success bg-white text-success" onClick={()=>handleChange(3000)}>&#8358;100000</button>
            <button className="col-3 btn border-success bg-white text-success" onClick={()=>handleChange(3000)}>&#8358;200000</button>
            <button className="col-3 btn border-success bg-white text-success" onClick={()=>handleChange(3000)}>&#8358;500000</button>
            <button className="col-3 btn border-success bg-white text-success" onClick={()=>handleChange(3000)}>&#8358;1000000</button>
        
        </div>
        <div className="row mt-5 ps-5">
            <h6 className="text-start text-success my-1">Or Enter Amount</h6>
           <div className="input-group mb-3">
                <span className="input-group-text">&#8358;</span>
                <input type="number" className="col-12 form-control " placeholder={amount === 0 ? `Enter the recharge amount` : `${amount}`} 
                    value={amount} onChange={(e)=>handleChange(Number(e.target.value))}/>
            </div>
        </div>
        <div className="row my-3 ps-5">
            <a href="#">
               <button className="col-12 btn btn-success">Deposite Now</button>
            </a>
        </div>
   
</div>
  )
}

export default Recharge