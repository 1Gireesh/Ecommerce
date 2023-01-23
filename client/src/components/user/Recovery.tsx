import React from 'react'
import UserInput from './UserInput';
import styles from "../../styles/user/Signup.module.css"
import "../../styles/btn.css";
import { Link } from 'react-router-dom';

let data = {
  email: "",
  password: "",
  cpassword: "", otp: ""
}

export default function Recovery() {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className={styles.signup} >
      <form action=""
        onSubmit={handleSubmit}
      >
        <>
          <UserInput data={data} type="email"></UserInput>
        </>
        <button type="submit"
          className={styles.submit + " btn btn-3"}
        ><span>Register</span></button>

        <h4 className='text-blue-400'>Want  have another account?
          <Link className='text-red-400 hover:text-red-500' to="/signup"> Signup here</Link>
        </h4>

      </form>
    </div>
  )
}
