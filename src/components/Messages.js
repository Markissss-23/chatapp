import React from 'react'
import Message from './Message'

const style = { 
    messages:`bg-[#afccee] padding-2.5 h-[calc(100%-6rem)] overflow-scroll`,
}

const Messages = () => {
    return (
        <div className={style.messages}>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    )
}

export default Messages