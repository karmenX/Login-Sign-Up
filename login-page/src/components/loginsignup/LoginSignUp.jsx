import React, {useState} from 'react'
import './LoginSignUp.css'

import user_icon from '../assets/user.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import logo from '../assets/horizontallogo.png'
import design from '../assets/design.png'


const LoginSignUp = () => {
    const ImageSize ={ width : '25px' , height : '25px' };
    const ImageSize1={width : '400px', height : '100px' };
    const ImageSize2={width : '600px', height : '500px' };
    const [action,setAction]=useState("Login");

  return (
       <div className="page-container">
            <div className="logo-container">
                <img style={ImageSize1} src={logo} alt="" />
            </div>

           <div className="design-container">
               <img style={ImageSize2} src={design} alt="" />
           </div>

    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Login" ?<div></div>: <div className="input">
                <img style={ImageSize} src={user_icon} alt="" />
                <input type="text" placeholder="Name" />
            </div>}


            <div className="input">
                <img style={ImageSize} src={email_icon} alt="" />
                <input type="email" placeholder="Email"  />
            </div>
            <div className="input">
                <img style={ImageSize} src={password_icon} alt="" />
                <input type="password" placeholder="Password" />
            </div>
        </div>
        {action === "Sign Up"?<div></div>: <div className="forgot-password">Lost password? <span>Click Here!</span></div>}

       <div className="submit-container">
           <div className={`submit ${action === "Sign Up" ? "" : "gray"}`} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
           <div className={`submit ${action === "Login" ? "" : "gray"}`} onClick={()=>{setAction("Login")}}>Login</div>
       </div>
    </div>

  </div>
  )
}

export default LoginSignUp
