import React from 'react'

const style = {
  input: `h-12 bg-white padding-2.5`,
  send: ``
}
const Input = () => {
  return (
    <div className={style.input}>
      <input type='text' placeholder='Send Message...' />
      <div className={style.send}>
        <img src='' alt='' />
        <input type='file' style={{ display: "none" }} id="file" />
        <label htmlFor='file'>
          <img src='' alt='' />
          <button>Send</button>
        </label>
      </div>

    </div>
  )
}

export default Input