import React from 'react'
import Setsuna from '../img/setsuna.png'

const style = { 
  search:`border-b-2`,
  searchForm: `p-6`,
  textinput:`bg-transparent border-none text-white outline-none placeholder:text-gray-300`,
  userChat:`p-6 flex items-center gap-6 text-white cursor-pointer hover:bg-[#123055]`,
  profilepicture:`bg-white h-12 w-12 rounded-full object-cover`,
  userChatInfo:``,
}

const Search = () => {
  return (
    <div className={style.search}>
      <div className={style.searchForm}>
        <input className={style.textinput} type="text" placeholder='search for a user'/>
      </div>
      <div className={style.userChat}>
        <img className={style.profilepicture} src={Setsuna} alt="Setsuna" />
        <div className={style.userChatInfo}>Markus Salvador</div>
      </div>
    </div>
  )
}

export default Search