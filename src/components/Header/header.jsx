import React from "react";
import LoginPupUp from "./loginPopUp";
import { useState } from "react";
import logo from '../image/logo.png'
import '../css/header.css'
import RegisterPupUp from "./registerPupUp";
import { Link } from "react-router-dom";
const Header = () => {
    const [buttonPopUp, setButtonPopUp] = useState(false)
    const [buttonRegPopUp, setButtonRegPopUp] = useState(false)
    
   
    return (
            <div className="container">
                <div className="section1"> 
                <div>
                    <div className="img"><Link to="/"><img src={logo}/> </Link>  </div>
                </div>
                <div>
                    <input type="text"
                     placeholder='Search 🔍'/>
                     
                </div>
                <div> <button className="login" onClick={() =>setButtonPopUp(true) }>Login in</button> </div>
                <LoginPupUp trigger = {buttonPopUp} setTrigger={setButtonPopUp} />
                <div> <button className="register" onClick={() =>setButtonRegPopUp(true)} >Register</button> </div>
                <RegisterPupUp trigger = {buttonRegPopUp} setTrigger={setButtonRegPopUp} />
                </div> 
            </div>
    )
}

export default Header