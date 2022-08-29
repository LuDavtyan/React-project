import React from "react";
import '../css/main.css'
import { Link } from "react-router-dom";
import guitar from '../image/Guitar..png'
import img18 from '../image/18.png'
import img19 from '../image/19.png'
import img20 from '../image/20.png'
import img21 from '../image/21.png'
import img22 from '../image/22.png'
const Main = () => {
    return (
        <div className="container">
            <div className="session">
                <h1>
                    Session Artists for your
                    dream project.
                </h1>
                <div className="green"></div>
                <div className="yellow"></div>
                <div className="category"> <p> Select Category</p></div>
                <button className="find">Find an srtist </button>
                <button className="become">Become seller </button>
            </div>

            <div className="bgImg">
                <div className="guitar">
          
                    <div><Link to="/guitaristSection"> <img src={guitar} /></Link>  </div>
                    <div><img src={img18} /></div>
                    <div><img src={img19} /></div>
                    <div><img src={img20} /></div>
                    <div><img src={img21} /></div>
                    <div><img src={img22} /></div>
                </div>
            </div>

            <div className="social">
                <h2>Social. </h2>
                <div className="iconBox">
                    <div className="icon"> <i class="fa-brands fa-instagram"></i> </div>
                    <div className="icon"> <i class="fa-brands fa-facebook"></i> </div>
                    <div className="icon"> <i class="fa-brands fa-twitter"></i> </div>
                </div>
            </div>
        </div>
    )
};

export default Main