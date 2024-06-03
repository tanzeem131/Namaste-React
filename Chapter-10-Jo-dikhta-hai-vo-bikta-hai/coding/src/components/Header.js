import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  const [btnReactName,setbtnReactName] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex flex-wrap bg-orange-400 justify-between p-4 m-2 shadow-2xl">
      <div className="font-bold items-center">
        <img className="w-[92px]" src={LOGO_URL} />
        <h3 className="italic">laZeeZ khana</h3>
      </div>
      <div className="flex items-center font-bold text-2xl">
        <ul className="flex flex-wrap gap-6">
          <li>Online Status {onlineStatus ? "🟢":"🔴"}</li>
          <li className="hover:bg-orange-600 hover:rounded-lg"><Link to={"/"}>Home</Link></li>
          <li className="hover:bg-orange-600 hover:rounded-lg"><Link to={"/about"}>About</Link></li>
          <li className="hover:bg-orange-600 hover:rounded-lg"><Link to={"/contact"}>Contact</Link></li>
          <li className="hover:bg-orange-600 hover:rounded-lg">Cart</li>
          <li className="hover:bg-orange-600 hover:rounded-lg"><Link to={"/grocery"}>Grocery</Link></li>
          <button className="hover:bg-blue-700 hover:rounded-lg" onClick={()=>{
            btnReactName === "login" ? setbtnReactName('logout'): setbtnReactName('login');
          }}>{btnReactName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
