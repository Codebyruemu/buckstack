import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'


const Incomeboard1 = () => {
    const [income, setIncome] = useState(0)
    const [balance, setBalance] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    useEffect (()=>{

    }, [])

    const withdraw_button = {
        border: '5px solid transparent',
        background:'white',
        color: 'black',
        borderRadius: '40px',
        padding: '2px 5px',
        overflow: 'hidden',
        width: '200px',
        whiteSpace: 'nowrap',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'ease-in-out .2s',
        ...(isHovered && {}),
    }
   

  return (
    <div className='container py-1 pb-3 my-3 card' style={{backgroundColor: '#0f9c68'}}>
        <div className="row ">
            <div className='d-flex text-white justify-content-around align-items-center'>
                <div className="col-sm-4 text-start px-2">
                    <p className='fs-6 fw-bold my-0'>&#8358; {income}</p>
                    <p className='fw-bold my-0'>Income</p>
                </div>
                <div className="col-sm-4 text-start">
                    <p className='fs-6 fw-bold my-0'>&#8358; {balance}</p>
                    <p className='fw-bold my-0'>Balance</p>
                </div>
                <div className="d-flex flex-column col-sm-4 gap-3 mt-3">
                    <Link to='/recharge'>
                            <button
                                style={withdraw_button}
                                onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                                onMouseLeave={() => setIsHovered(false)} // Set hover state to false
                            >
                                Top up
                            </button>
                    </Link>
                    <Link to='/withdraw'>
                        <button
                            className="bg-dark text-white"
                            style={withdraw_button}
                            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
                        >
                            Withdraw
                        </button>
                    </Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Incomeboard1