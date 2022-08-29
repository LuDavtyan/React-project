import React from "react";

const RegisterPupUp = (props) => {
    return (props.trigger) ? (
        <div className="regPupUp">
            <div className="pupUp-inner">
                <div className="log">  <button className="close-btn"
                    onClick={() => props.setTrigger(false)} ><i class="fa-solid fa-x"></i> </button>
                </div>
                <h2>Register</h2> 
                
                <from>
                    <input className="inp" type='text' placeholder='Enter your email' />
                    <input className="inp" type='text' placeholder='Choose a Username' />
                    <input className="inp" type='text' placeholder='Choose a Password' />
                </from>
                <div><button className="btnLog">Join</button> </div>
                {props.children}
            </div>
        </div>
    ) : "";
};

export default RegisterPupUp