import React from 'react'
import ProfileHeader from '../ProfileHeader'
import DataTable from '../profileTable/DataTable'
import ProfileText from '../ProfileText'
import Incomeboard1 from '../Incomeboard1'
import Incomeboardtwo from '../Incomeboardtwo'
import Baselinks from '../Baselinks'
import BottomNav from '../Nav/Nav'
import Buckimg from '../Buckimg'

const Profiles = () => {
  return (
    <div>
        <ProfileHeader />
        <Buckimg />
        <DataTable />
        <ProfileText />
        <Incomeboard1 />
        <Incomeboardtwo  />
        <Baselinks />
        <BottomNav />    
    </div>
  )
}

export default Profiles