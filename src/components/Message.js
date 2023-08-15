import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const style = {
  message: `flex gap-5 mb-5`,
  messageInfo: `flex flex-col text-gray-700 font-light`,
  messageContent: `flex flex-col max-w-[80%] gap-2.5`,
  imgInfo: `w-10 h-10 rounded-full object-cover`,
  imgContent: `w-1/2	`,
  text:`bg-white py-2.5 px-4 rounded-b-xl rounded-tr-xl max-w-max `,

  messageOwner:`flex flex-row-reverse gap-5 mb-5`,
  textOwner:`bg-[#87bddc] py-2.5 px-4 rounded-b-xl rounded-tl-xl max-w-max`,
  messageContentOwner: `flex flex-col max-w-[80%] gap-2.5 items-end`,
}

const Message = ({message}) => {

  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)
  
  const ref = useRef()
  
  useEffect(() => {
    ref.current?.scrollIntoView({behaviour:"smooth"})
  }, [message])

  return (
    <div 
      ref={ref}
      className={message.senderId === currentUser.uid ? style.messageOwner : style.message}
    >
      <div className={style.messageInfo}>
        <img 
          className={style.imgInfo} 
          src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} 
          alt="" 
        />
        <span>Just Now</span>
      </div>
      <div className={style.messageContent}>
        <p className={style.textOwner}>{message.text}</p>
        {message.img && <img className={style.imgContent} src={message.img} alt="" />}
      </div>
    </div>
    
  )
}

export default Message;