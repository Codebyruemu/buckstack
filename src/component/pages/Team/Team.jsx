import React from 'react'
import './Team.css'
import BottomNav from '../../Nav/Nav'
import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <div>
        <div className="container">
            <div className='row bg-success text-white pt-3 pb-2'>
                <div className='d-flex'>
                    <Link to='/home'>
                        <i className="col-1 bi bi-chevron-left text-white"></i>
                    </Link> 
                    <p className="col-11 text-center fw-bold">Team</p>
                </div>
                
            </div>
        </div>
    <div className="container mt-4">
        <div className="invite-card">
            <p><strong>Invitation Code</strong></p>
            <p>ZSC6AT &#128203;</p>
            <p><strong>Invitation Link</strong></p>
            <p><a href="#">https://buckstack.site/register?invite=ZSC6AT</a> &#128203;</p>
        </div>
        <div className="stats">
            <div className="stat-item">
                <p>0</p>
                <p>Team Size</p>
            </div>
            <div className="stat-item">
                <p>&#8358; 0</p>
                <p>Team Invest</p>
            </div>
            <div className="stat-item">
                <p>&#8358; 0</p>
                <p>Team Withdrawals</p>
            </div>
        </div>
        <div className="direct-referral">Direct Referral</div>
        <div className="referral-details">
            <div>
                <p>0</p>
                <p>Team Size</p>
            </div>
            <div>
                <p>25%</p>
                <p>Team Benefits</p>
            </div>
        </div>
        <div className="view-team">View Team</div>

        <div className="direct-referral">Level 2</div>
        <div className="referral-details">
            <div>
                <p>0</p>
                <p>Team Size</p>
            </div>
            <div>
                <p>10%</p>
                <p>Team Benefits</p>
            </div>
        </div>
        <div className="view-team">View Team</div>
    </div>
    <BottomNav />
    </div>
  )
}

export default Team