import React from 'react'
import Add from '../img/AddProfileImage.png'

const style = {
  formContainer: `bg-[#242427] h-screen flex items-center justify-center`,
  formWrapper: `bg-white py-16 px-32 br-10px flex flex-col gap-2 items-center`,
  form: `flex flex-col gap-6`,
  brandName: `text-[#338ded] font-bold text-3xl`,
  title: `text-[#338ded] font-base text-sm`,
  input: `p-4 border-b-2 border-[#338ded] `,
  button: `bg-[#338ded] text-white p-4 font-semibold border-0 cursor-pointer`,
  text: `text-[#338ded] text-xs`,
  label:  `flex items-center text-[#338ded] text-xs cursor-pointer`,
  image: `max-w-[20%] max-h-[20%]`
}

const Register = () => {
  return (
    <div className={style.formContainer}>
      <div className={style.formWrapper}>
        <span className={style.brandName}>IPAL</span>
        <span className={style.title}>Register</span>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder='enter name' />
          <input className={style.input} type="email" placeholder='email' />
          <input className={style.input} type="password" placeholder='password' />
          <input style={{display:"none"}}type="file" id="file" />
          <label className={style.label}htmlFor="file">
            <img className={style.image} src={Add} alt=""/>
            <span>Add an avatar</span>
          </label>
          <button className={style.button}>Sign Up</button>
        </form>
        <p>Do you have an account? Login here</p>
      </div>
    </div>
  )
}

export default Register;