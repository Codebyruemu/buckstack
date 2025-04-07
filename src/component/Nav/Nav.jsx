import React from 'react';
import { FaHome, FaFolder, FaUsers, FaUser } from 'react-icons/fa';
import './BottomNav.css'; // We'll define this CSS below
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <div className="nav-item">
        <FaHome size={20} />
        <span><Link className='text-light' to='/home' >Home</Link></span>
      </div>
      <div className="nav-item">
        <FaFolder size={20} />
        <span><Link className='text-light'  to='/products' >Product</Link></span>
      </div>
      <div className="nav-item">
        <FaUsers size={20} />
        <span><Link className='text-light'  to='/team' >Team</Link></span>
      </div>
      <div className="nav-item">
        <FaUser size={20} />
        <span><Link className='text-light'  to='/profile' >Profile</Link></span>
      </div>
    </nav>
  );
};

export default BottomNav;
