import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const style = { 
    home: `bg-[#242427] h-screen flex items-center justify-center`,
    container: `border border-white rounded-lg h-[90%] w-[80%]`,
}




const Home = () => {
  return (
    <div className={style.home}>
        <div className={style.container}>
            <Sidebar />
            <Chat />
        </div>
    </div>
  )
}

export default Home