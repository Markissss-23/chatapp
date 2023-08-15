import React, { useContext, useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const style = {
  chats: ``,
  userChat: `p-6 flex items-center gap-6 text-white cursor-pointer hover:bg-[#123055]`,
  profilepicture: `bg-white h-12 w-12 rounded-full object-cover`,
  userChatInfo: ``,
  userText: `text-base font-bold`,
  underText: `text-xs text-gray-200 font-light`,
}

const DiffChats = () => {

  const [chats, setChats] = useState([])

  const { currentUser } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
      });

      return () => {
        unsub();
      }
    }

    currentUser.uid && getChats();
  }, [currentUser.uid])


  const handleSelect = (u) => {
    dispatch({type: "CHANGE_USER", payload: u})
  }

  return (
    <div className={style.chats}>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (

      <div className={style.userChat} key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
        <img className={style.profilepicture} src={chat[1].userInfo.photoURL} alt="" />
        <div className={style.userChatInfo}>
          <span className={style.userText}>{chat[1].userInfo.displayName}</span>
          <p className={style.underText}>{chat[1].lastMessage?.text}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default DiffChats