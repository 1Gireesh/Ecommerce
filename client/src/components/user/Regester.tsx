import styles from "../../styles/user/Signup.module.css"
import "../../styles/btn.css";
import UserInput from "./UserInput";
import { Link } from "react-router-dom";
import { useState } from "react";

let data = {
  email: "",
  password: "",
  cpassword: "", otp: ""
}

export default function Regester() {


  let [otp, setOtp] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(data);
    if (data.cpassword === data.password)
      setOtp(true);
  }

  return (
    <div className={styles.signup} >
      <form action=""
        onSubmit={handleSubmit}
      >
        {otp ? <>
          <h2 className="text-blue-400">an otp is sent to your mail account {data.email} enter otp here</h2>
          <UserInput data={data} type="otp"></UserInput>
        </> : <>
          <UserInput data={data} type="email"></UserInput>
          <UserInput data={data} type="password"></UserInput>
          <UserInput data={data} type="cpassword"></UserInput>
        </>
        }
        <button type="submit"
          className={styles.submit + " btn btn-3"}
        ><span>{otp ? "Verify Otp" : "Register"}</span></button>

        <h4 className='text-blue-400'>Allready have an account?
          <Link className='text-red-400 hover:text-red-500' to="/login"> Login here</Link>
        </h4>

      </form>
    </div>
  )
}
