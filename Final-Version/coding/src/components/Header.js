import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useSelector } from "react-redux";
import { TiShoppingCart, TiHomeOutline } from "react-icons/ti";
import { MdCall } from "react-icons/md";

const Header = () => {
  const [btnReactName, setbtnReactName] = useState("login");
  const onlineStatus = useOnlineStatus();

  //Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex grid-cols-12 flex-wrap rounded-3xl bg-gradient-to-r from-[#FE9234] to-[#F15700] justify-between p-4 m-2 shadow-2xl items-center">
      <div className="flex md:p-0 lg:p-0 sm:p-0 vs:p-0 justify-start lg:mx-0 md:mx-0 sm:mx-auto vs:mx-auto font-bold col-span-2 vs:mb-2">
        <div className="w-min">
          <img className="hover:-rotate-12" src={LOGO_URL} />
          <h3 className="italic">UrbanTastes</h3>
        </div>
      </div>
      <div className="flex lg:mx-0 md:mx-0 sm:mx-auto vs:mx-auto justify-end font-bold lg:text-2xl md:text-2xl sm:text-lg col-span-10">
        <ul className="flex flex-wrap lg:gap-6 md:gap-6 sm:gap-4 vs:gap-3">
          <li className="lg:p-2 md:p-2 sm:p-1 flex items-center text-[16px] cursor-default">
            Status {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="hover:bg-orange-300 hover:rounded-lg lg:p-2 md:p-2 sm:p-1 flex items-center">
            <Link to={"/"}>
              <TiHomeOutline />
            </Link>
          </li>
          <li className="hover:bg-orange-300 hover:rounded-lg lg:p-2 md:p-2 sm:p-1 flex items-center">
            <Link to={"/contact"}>
              <MdCall />
            </Link>
          </li>
          <li className="hover:bg-orange-300 hover:rounded-lg lg:p-2 md:p-2 sm:p-1">
            <Link to={"/cart"}>
              <div className="flex items-center">
                <div>
                  <TiShoppingCart />
                </div>
                <div className="font-semibold text-[18px]">
                  ({cartItems.length})
                </div>
              </div>
            </Link>
          </li>
          <button
            className="hover:bg-blue-700 hover:rounded-lg lg:p-2 md:p-2 sm:p-1"
            onClick={() => {
              btnReactName === "login"
                ? setbtnReactName("logout")
                : setbtnReactName("login");
            }}
          >
            {btnReactName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
