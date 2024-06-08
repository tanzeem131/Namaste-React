import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  const [btnReactName,setbtnReactName] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex flex-wrap rounded-3xl bg-orange-400 justify-between p-4 m-2 shadow-2xl">
      <div className="font-bold items-center">
        <img className="w-[92px] hover:-rotate-12" src={LOGO_URL} />
        <h3 className="italic">laZeeZ khana</h3>
      </div>
      <div className="flex items-center font-bold text-2xl">
        <ul className="flex flex-wrap gap-6">
          <li className="p-2">Online Status {onlineStatus ? "🟢":"🔴"}</li>
          <li className="hover:bg-orange-300 hover:rounded-lg p-2"><Link to={"/"}>Home</Link></li>
          <li className="hover:bg-orange-300 hover:rounded-lg p-2"><Link to={"/about"}>About</Link></li>
          <li className="hover:bg-orange-300 hover:rounded-lg p-2"><Link to={"/contact"}>Contact</Link></li>
          <li className="hover:bg-orange-300 hover:rounded-lg p-2">Cart</li>
          <li className="hover:bg-orange-300 hover:rounded-lg p-2"><Link to={"/grocery"}>Grocery</Link></li>
            <button className="hover:bg-blue-700 hover:rounded-lg p-2" onClick={()=>{
              btnReactName === "login" ? setbtnReactName('logout'): setbtnReactName('login');
            }}>{btnReactName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
