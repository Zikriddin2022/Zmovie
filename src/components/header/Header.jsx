import React ,{ useState } from 'react';
import "./header.css"
import {Link} from "react-router-dom"

function Header() {

    const [mobile, setMobile] = useState(false)

  return (
    <header className="header">
      <div className="container flexSB">
        <nav className="flexSB">
            <div className="logo">
                {/* <img src="./images/logo.png" alt="" /> */}
                <h2 className='logo' style={{color:"red"}}>Zikriddin</h2>
            </div>
            <ul className={mobile ? "newMenu-list" : "flexSB"} onClick={() => setMobile(false) }>
                <Link to="/">Home</Link>
                <Link to="/series">Series</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/pages">Pages</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/contact">Contact</Link>
            </ul>
            <button className="toggle" onClick={() => setMobile(!mobile) }>
               {mobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
        </nav>
        <div className="account flexSB">
            <i className="fa fa-search"></i>
            <i className="fa fa-bell"></i>
            <i className="fa fa-user"></i>
            <button>Subscribe Now</button>
        </div>
      </div>
      
    </header>
  );
}

export default Header;
