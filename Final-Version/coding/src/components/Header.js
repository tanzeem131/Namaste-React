import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnReactName,setbtnReactName] = useState("login");
  // const onlineStatus = useOnlineStatus();

  // const {loggedInUser} = useContext(UserContext);

  //Subscribing to the store using selector

  const cartItems = useSelector((store)=>store.cart.items);

  return (
    <div className="grid grid-cols-12 flex-wrap rounded-3xl bg-gradient-to-r from-[#FE9234] to-[#F15700] justify-between lg:gap-[30%] md:gap-[15%] sm:gap-[5%] p-4 m-2 shadow-2xl">
      <div className="flex flex-col md:p-0 lg:p-0 sm:p-0 vs:p-2 content-center justify-start font-bold items-center col-span-2">
        <img className="w-[90px] hover:-rotate-12" src={LOGO_URL} />
        <h3 className="italic lg:w-[90px] md:w-[90px] sm:w-16 text-[13px] text-wrap vs:w-12">laZeeZ khana</h3>
      </div>
      <div className="flex w-fit px-1 justify-end items-center font-bold lg:text-2xl md:text-2xl sm:text-lg col-span-10">
        <ul className="flex flex-wrap px-1 gap-6">
          {/* <li className="p-2 cursor-default">Online Status {onlineStatus ? "🟢":"🔴"}</li> */}
          <li className="hover:bg-orange-300 hover:rounded-lg lg:p-2 md:p-2 sm:p-1 "><Link to={"/"}>Home</Link></li>
          <li className="hover:bg-orange-300 hover:rounded-lg lg:p-2 md:p-2 sm:p-1"><Link to={"/about"}>About</Link></li>
          <li className="hover:bg-orange-300 hover:rounded-lg lg:p-2 md:p-2 sm:p-1"><Link to={"/contact"}>Contact</Link></li>
          <li className="hover:bg-orange-300 hover:rounded-lg lg:p-2 md:p-2 sm:p-1"><Link to={"/cart"}>Cart({cartItems.length})</Link></li>
          <li className="hover:bg-orange-300 hover:rounded-lg lg:p-2 md:p-2 sm:p-1"><Link to={"/grocery"}>Grocery</Link></li>
          <button className="hover:bg-blue-700 hover:rounded-lg lg:p-2 md:p-2 sm:p-1" onClick={()=>{
            btnReactName === "login" ? setbtnReactName('logout'):setbtnReactName('login');
          }}>{btnReactName}</button>
          {/* <li className="hover:bg-orange-300 hover:rounded-lg p-2">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
