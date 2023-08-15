import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

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

  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;


    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };


  return (
    <div className={style.formContainer}>
      <div className={style.formWrapper}>
        <span className={style.brandName}>IPAL</span>
        <span className={style.title}>Log in</span>
        <form className={style.form} onSubmit={handleSubmit}>
          <input className={style.input} type="email" placeholder='email' />
          <input className={style.input} type="password" placeholder='password' />
          <button className={style.button}>Sign In</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Sign up here</Link></p>
      </div>
    </div>
  )
}

export default Login;