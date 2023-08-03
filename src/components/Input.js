import React from 'react'
import Attach from '../img/attach-file.png'
import Img from '../img/gallery.png'



const style = {
  input: `flex items-center justify-between h-12 bg-white padding-2.5`,
  send: `flex items-center gap-2.5`,
  inputs: `w-fit border-none outline-none text-blue-900 placeholder-gray-500`,
  fileImport: ``,
  img: `h-6 w-6 cursor-pointer`, 
  button: `border-none py-2 px-4 text-white bg-[#4d9dcb] mr-1.5`
}
const Input = () => {
  return (
    <div className={style.input}>
      <input className={style.inputs} type='text' placeholder='Send Message...' />
      <div className={style.send}>
        <img className={style.img} src={Attach} alt='' />
        <input className={style.inputs} type='file' style={{ display: "none" }} id="file" />
        <label htmlFor='file'>
          <img className={style.img} src={Img} alt='' />
        </label>
        <button className={style.button}>Send</button>
      </div>

    </div>
  )
}

export default Input