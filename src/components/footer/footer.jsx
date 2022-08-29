import React from "react";
import '../css/footer.css'
import logo from '../image/logo.png'

const Footer = () => {
    return (
        <div className="container">
            <footer>
                <div className="app">
                    <div className="help">
                        <div><p>Modile App </p></div>
                        <div><p>Community </p></div>
                        <div><p>Company </p></div>
                    </div>
                    <div className="logo"> <img src={logo} /></div>
                    <div className="help" >
                        <div><p>Help desk </p></div>
                        <div><p> Blog </p></div>
                        <div><p> Resources</p></div>
                    </div>
                </div>

                <div className="info"><p>© 2022 Session artist All rights reserved </p> </div>

            </footer>
        </div>

    )
};

export default Footer