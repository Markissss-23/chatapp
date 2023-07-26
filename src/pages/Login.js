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
}

const Login = () => {
  return (
    <div className={style.formContainer}>
      <div className={style.formWrapper}>
        <span className={style.brandName}>IPAL</span>
        <span className={style.title}>Log in</span>
        <form className={style.form}>
          <input className={style.input} type="email" placeholder='email' />
          <input className={style.input} type="password" placeholder='password' />
          <button className={style.button}>Sign Up</button>
        </form>
        <p>You don't have an account? Sign up here</p>
      </div>
    </div>
  )
}

export default Login;