import logoApple from "../../styles/image/apple_icon.svg"
import logoTodo from "../../styles/image/logo-e7e40b.svg"
//import logoFB from "../../styles/image/fb_icon.svg"
import logoGG from "../../styles/image/google_icon.svg"
import React, { useState } from 'react';
import InputPassword from "./InputPassword.js";

function Login(){
    const [hide,setHide] = useState(true);
    const handleChangeIcon = (flag)=>{
        if(flag === true)
            return <i className="password__icon--show fa fa-eye" onClick={() => setHide(!hide)}/>
        else 
            return <i className="password__icon--hide fa fa-eye-slash" onClick={() =>setHide(!hide)}/>
    }
    return(
        <div className="login__around">
                <div className="login">
                <div className="login__header">
                    <img src={logoTodo} alt="" />
                </div>
                <div className="login__body">
                    <h3>Log in</h3>
                    <a href>
                    <div className="login__body__btnLink">
                        <img src={logoGG} alt="" />
                        <p>Continue with Google</p>
                    </div>
                    </a>
                    <a href>
                    <div className="login__body__btnLink">
                        <img src="https://d3ptyyxy2at9ui.cloudfront.net/facebook-fadd25.svg" alt="" />
                        <p>Continue with Facebook</p>
                    </div>
                    </a>
                    <a href>
                    <div className="login__body__btnLink">
                        <img src={logoApple} alt="" />
                        <p>Continue with Apple</p>
                    </div>
                    </a>
                    <div className="login__body__line">
                    <div className="line__middleLine">OR</div>
                    </div>
                    <div className="login__input">
                    <div className="login__input--email">
                        <p>Email</p>
                        <input type="text" />
                    </div>
                    <div className="login__input--password">
                        <p>Password</p>
                        <input type="text" />
                        {/* {()=>handleChangeIcon(hide)} */}
                        {/* {(hide)?<i className="password__icon--show fa fa-eye" onClick={() => setHide(!hide)}/>:<i className="password__icon--hide fa fa-eye-slash" onClick={() =>setHide(!hide)}/>} */}
                        <InputPassword flag={hide}/>
                        
                        
                    </div>
                    <div className="login__button">Log in</div>
                    </div>
                    <div className="login__stayInLoggin">
                    <input type="checkbox" /> Keep me logged in
                    </div>
                    <a className="login__forgetPassword" href>Forgot your password?</a>
                </div>
                <div className="login__helpblock">
                    <p>Don't have an account? <a href>Sign up</a></p>
                    <a className="login__support" href>Todoist Support</a>
                </div>
            </div>
        </div>
    )
}

export default Login