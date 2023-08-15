import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const style = { 
  navbar:`flex items-center bg-[#123055] h-16 p-4 justify-between text-gray-200`,
  logo:`font-bold`,
  user:`flex gap-px`,
  profilepicture:`bg-white h-8 w-8 rounded-full object-cover`,
  button:`bg-[#4a8ad9] text-xs border-none h-8 w-12 cursor-pointer`
}

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className={style.navbar}>
      <span className={style.logo}>IPAL</span>
      <div className={style.user}></div>
        <img className={style.profilepicture} src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button className={style.button} onClick={() => signOut(auth)}>Logout</button>
    </div>
  )
}

export default Navbar