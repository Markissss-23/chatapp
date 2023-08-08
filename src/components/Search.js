import React, { useState } from 'react'
import Setsuna from '../img/setsuna.png'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase"


const style = { 
  search:`border-b-2`,
  searchForm: `p-6`,
  textinput:`bg-transparent border-none text-white outline-none placeholder:text-gray-300`,
  userChat:`p-6 flex items-center gap-6 text-white cursor-pointer hover:bg-[#123055]`,
  profilepicture:`bg-white h-12 w-12 rounded-full object-cover`,
  userChatInfo:``,
}

const Search = () => {

  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [ err, setErr ] = useState(false)
  
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"), 
      where("displayName","==", username))

    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch(err) {
      setErr(true)
    }

  }


  const handleKey = e => {
    e.code === "Enter" && handleSearch();
  }

  return (
    <div className={style.search}>
      <div className={style.searchForm}>
        <input className={style.textinput} type="text" placeholder='search for a user' onKeyDown={handleKey} onChange={e=> setUsername(e.target.value)}/>
      </div>
      { err && <span>User not found</span>}
      { user && <div className={style.userChat}>
        <img className={style.profilepicture} src={user.photoURL} alt="" />
        <div className={style.userChatInfo}>{user.displayName}</div>
      </div>}
    </div>
  )
}

export default Search