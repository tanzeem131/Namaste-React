import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnReactName,setbtnReactName] = useState("login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
        <h3>lazeez khana</h3>
      </div>
      <div className="nav-items">
        <ul>
        <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li>Cart</li>
          <button className="login-btn" onClick={()=>{
            btnReactName === "login" ? setbtnReactName('logout'): setbtnReactName('login');
          }}>{btnReactName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
