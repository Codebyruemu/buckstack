import React,{useState,useEffect} from 'react'
import banner from '../../assets/banner.jpg'

const Withdraw = () => {
    const [balance, setBalance] = useState(0)
    const [accountInfo, setaccountInfo] = useState({
        accountName: "",
        accountNumber: "",
        bankName: ""
    })
    useEffect (()=>{}, [])

  return (
    
    <div className='container mb-5'>
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
        <div className="row mt-5 ps-5">
            
           <div className="input-group mb-3">
                <span className="input-group-text text-success">&#8358;</span>
                <input type="number" className="col-12 form-control " placeholder="withdrawal amount"
                    value=""/>
            </div>
            {balance && (
                <p className="fs-6">Available Balance:&#8358; {balance}</p>
            )}
        </div>
        <div className="row my-3 ps-5">
            <a href="#">
               <button className="col-12 btn btn-success">withdrawal</button>
            </a>
        </div>
        <div className="row my-5 ps-5">
            {accountInfo && (
                <div>
                    <p className="fs-6 mb-3">Bank Account</p>
                    <p className='my-0'>Account Name:{accountInfo.accountName}</p>
                    <p className='my-0'>Account number:{accountInfo.accountNumber}</p>
                    <p className='my-o'>Bank Name:{accountInfo.bankName}</p>
                </div>
            )}
        </div>
        <div className="row mb-3 bg-dark text-white">
            <p className='fw-bold text-success'>Withdrawal Tips:</p>
            <small>1. Minimum withdrawal amount: ₦1000.</small>
            <small>2. Transaction fee: 15%</small>
            <p>WITHDRAWAL IS 9 AM to 12 PM, and 3PM to 6 PM DAILY</p>
        </div>
        

    </div>
    
  )
}

export default Withdraw