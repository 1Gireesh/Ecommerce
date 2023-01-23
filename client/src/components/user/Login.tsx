import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../../styles/user/Signup.module.css"
import "../../styles/btn.css";
import UserInput from './UserInput';

let data = {
  email: "",
  password: "",
  cpassword: "", otp: ""
}
export default function Login() {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className={styles.signup}>
      <form action=""
        onSubmit={handleSubmit}
      >
        <>
          <UserInput data={data} type="email"></UserInput>
          <UserInput data={data} type="password"></UserInput>
        </>
        <button type="submit"
          className={styles.submit + " btn btn-3"}
        ><span>Login</span></button>

        <h4 className='text-blue-400'>Dont have an account? 
          <Link  className='text-red-400 hover:text-red-500' to="/signup"> Signup here</Link>
        </h4>
        <h4 className='text-blue-400'>Forgot password?
          <Link className='text-red-400 hover:text-red-500' to="/recovery"> Recover here</Link>
        </h4>
      </form>

    </div >
  )
}
