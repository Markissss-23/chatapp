import React from 'react'
import Tobix from '../img/Tobix.png'
import Arms from '../img/Arms.png'
import Dawest from '../img/Dawests.png'



const style = {
  chats:``,
  userChat:`p-6 flex items-center gap-6 text-white cursor-pointer hover:bg-[#123055]`,
  profilepicture:`bg-white h-12 w-12 rounded-full object-cover`,
  userChatInfo:``,
  userText:`text-base font-bold`,
  underText:`text-xs text-gray-200 font-light`,
}

const DiffChats = () => {
  return (
    <div className={style.chats}>
      <div className={style.userChat}>
        <img className={style.profilepicture} src={Tobix} alt="Setsuna" />
        <div className={style.userChatInfo}>
          <span className={style.userText}>Toby</span>
          <p className={style.underText}>That means your 18 as well right?</p>
        </div>
      </div>
      <div className={style.userChat}>
        <img className={style.profilepicture} src={Arms} alt="Setsuna" />
        <div className={style.userChatInfo}>
          <span className={style.userText}>Amsyhar</span>
          <p className={style.underText}>well i have my average length in about 25.5 inches</p>
        </div>
      </div>
      <div className={style.userChat}>
        <img className={style.profilepicture} src={Dawest} alt="Setsuna" />
        <div className={style.userChatInfo}>
          <span className={style.userText}>Daniel </span>
          <p className={style.underText}>Rejection is tough</p>
        </div>
      </div>
    </div>
  )
}

export default DiffChats