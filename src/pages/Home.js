import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const style = { 
    home: `bg-gray-800 h-screen flex items-center justify-center`,
    container: `border border-white rounded-lg h-[90%] w-[80%] flex`,
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