import React, { useContext, useState } from 'react'
import { collection, query, where, getDocs, getDoc, setDoc, updateDoc, serverTimestamp, doc } from "firebase/firestore";
import { db } from "../firebase"
import { AuthContext } from "../context/AuthContext"


const style = { 
  search:`border-b-2`,
  searchForm: `p-6`,
  textinput:`bg-transparent border-none text-white outline-none placeholder:text-gray-300`,
  userChat:`p-6 flex border-t-2 items-center gap-6 text-white cursor-pointer hover:bg-[#123055]`,
  profilepicture:`bg-white h-12 w-12 rounded-full object-cover`,
  userChatInfo:``,
}

const Search = () => {

  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [ err, setErr ] = useState(false)

  const {currentUser} = useContext(AuthContext)
  
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

  const handleSelect = async () => { 
    // checks if chat collection exists in firestore, if it doesnt it creates one
    const combinedID = 
      currentUser.uid > user.uid 
        ? currentUser.uid + user.uid 
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc (db, "chats" , combinedID));
      
      if(!res.exists()){
        // creates a chat in chats collection
        await setDoc(doc (db, "chats", combinedID), {messages: [] })

        // creates user chats
        await updateDoc(doc (db, "userChats", currentUser.uid),{
          [combinedID+".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          }, 
          [combinedID+".date"]: serverTimestamp()
        });

        await updateDoc(doc (db, "userChats", user.uid),{
          [combinedID+".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          }, 
          [combinedID+".date"]: serverTimestamp()
        })
      }

    } catch (err) {

    }

    setUser(null);
    setUsername("")
  }

  return (
    <div className={style.search}>
      <div className={style.searchForm}>
        <input 
          className={style.textinput} 
          type="text" placeholder='search for a user' 
          onKeyDown={handleKey} 
          onChange={e=> setUsername(e.target.value)}
          value={username}
        />
      </div>
      { err && <span>User not found</span>}
      { user && <div className={style.userChat} onClick={handleSelect}>
        <img className={style.profilepicture} src={user.photoURL} alt="" />
        <div className={style.userChatInfo}>{user.displayName}</div>
      </div>}
    </div>
  )
}

export default Search