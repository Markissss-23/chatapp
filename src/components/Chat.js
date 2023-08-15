import React, { useContext } from 'react'
import Add from '../img/add-contact.png'
import More from '../img/three-dots.png'
import Video from '../img/video-camera.png'
import Input from './Input'
import Messages from './Messages'
import { ChatContext } from '../context/ChatContext'

const style = {
  chat: `flex-2`,
  chatInfo: `flex items-center bg-[#4d8cd9] h-12 p-4 justify-between text-gray-200`,
  chatIcons: `flex gap-4`,
  image: `h-6 cursor-pointer`,
  underText: `text-xs text-gray-200 font-light`,
}

const Chat = () => {
  const { data } = useContext(ChatContext)

  return (
    <div className={style.chat}>
      <div className={style.chatInfo}>
        <span className={style.userName}>{data.user?.displayName}</span>
        <div className={style.chatIcons}>
          <img className={style.image} src={Video} alt='' />
          <img className={style.image} src={Add} alt='' />
          <img className={style.image} src={More} alt='' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat