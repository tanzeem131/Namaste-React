import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  const [btnReactName,setbtnReactName] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex">
      <div className="logo">
        <img src={LOGO_URL}/>
        <h3>lazeez khana</h3>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status {onlineStatus ? "🟢":"🔴"}</li>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li>Cart</li>
          <li><Link to={"/grocery"}>Grocery</Link></li>
          <button className="login-btn" onClick={()=>{
            btnReactName === "login" ? setbtnReactName('logout'): setbtnReactName('login');
          }}>{btnReactName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
