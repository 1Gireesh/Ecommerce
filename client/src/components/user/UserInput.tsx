import React, { useState } from 'react'
import styles from "../../styles/user/Signup.module.css"


type inp = {
    type: "email" | "password" | "cpassword" | "otp",
    data: { email: string, password: string, cpassword: string, otp: string }
}


export default function UserInput({ type, data }: inp) {

    let [lbl, setLbl] = useState({ top: "30px", fontSize: "medium" })


    return (
        <div className={"flex flex-col " + styles.signupInput}  >
            <label style={lbl} >{type === "cpassword" ? "confirm password" : type}
            </label>
            <input autoComplete="none" onBlur={() => setLbl({ top: "30px", fontSize: "medium" })}
                onFocus={() => setLbl({ top: "0px", fontSize: "small" })}
                type={(() => {
                    if (type === "email") return "email";
                    else if (type === "otp") return "text";
                    else return "password";
                })()}
                onChange={(el) => data[type] = el.target.value}
                name={type} required
                maxLength={type === "otp" ? 4 : 15}
            />
        </div>
    )
}
