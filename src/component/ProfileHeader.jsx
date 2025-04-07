import React from 'react'


const ProfileHeader = () => {
  return (
    <div className="container">
      <div className='row bg-success text-white pt-3 pb-2'>
          <div className='d-flex'>
             <a href="#">
                <i className="col-1 bi bi-chevron-left text-white"></i>
              </a> 
              <p className="col-11 text-center fw-bold">profile</p>
          </div>
          
      </div>
    </div>
  )
}

export default ProfileHeader