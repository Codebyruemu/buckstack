import React from 'react'
import ProfileHeader from '../ProfileHeader'
import DataTable from '../profileTable/DataTable'
import ProfileText from '../ProfileText'
import Incomeboard1 from '../Incomeboard1'
import Incomeboardtwo from '../Incomeboardtwo'
import Baselinks from '../Baselinks'

const Profiles = () => {
  return (
    <div className='container'>
        <ProfileHeader />
        <DataTable />
        <ProfileText />
        <Incomeboard1 />
        <Incomeboardtwo />
        <Baselinks />
        
        
    </div>
  )
}

export default Profiles