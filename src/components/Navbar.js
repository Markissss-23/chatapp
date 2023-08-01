import React from 'react'
import Setsuna from '../img/setsuna.png'

const style = { 
  navbar:`flex items-center bg-[#123055] h-16 p-4 justify-between text-gray-200`,
  logo:`font-bold`,
  user:`flex gap-px`,
  profilepicture:`bg-white h-8 w-8 rounded-full object-cover`,
  button:`bg-[#4a8ad9] text-xs border-none h-8 w-12 cursor-pointer`
}

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <span className={style.logo}>IPAL</span>
      <div className={style.user}></div>
        <img className={style.profilepicture} src={Setsuna} alt="" />
        <span>Markus Salvador</span>
        <button className={style.button}>Logout</button>
    </div>
  )
}

export default Navbar