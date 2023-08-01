import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import DiffChats from './DiffChats'

const style = {
  sidebar: `flex-1 border-r-[1px] border-white bg-[#2869bb]`
}

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Navbar />
      <Search />
      <DiffChats />
    </div>
  )
}

export default Sidebar