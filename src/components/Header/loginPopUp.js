import React from "react";
import '../css/popUp.css'

const LoginPupUp = (props) => {
    return (props.trigger) ? (
        <div className="pupUp">
            <div className="pupUp-inner">
                <div className="log">  <button className="close-btn"
                    onClick={() => props.setTrigger(false)} ><i class="fa-solid fa-x"></i> </button>
                </div>
                <h2>Login in</h2> 
                <from>
                    <input className="inp" type='text' placeholder='Enter your email' />
                    <input className="inp" type='text' placeholder='Choose a Password' />
                </from>
                <div><button className="btnLog">Login in</button> </div>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default LoginPupUp