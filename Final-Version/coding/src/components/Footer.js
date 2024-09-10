import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#FE9234] to-[#F15700] h-56 p-4 mt-20 shadow-2xl">
        <div className="grid grid-cols-12 justify-evenly">
          <div className="my-1 py-1 col-span-4">
            <p>&copy; 2024 UrbanTastes. All rights reserved.</p>
          </div>
          <div className="col-span-4">
            <div className="flex flex-col my-1 py-1 gap-2">
              <Link to={"/about"} className="hover:font-semibold px-4 w-4">
                About
              </Link>
              <Link to={"/contact"} className="hover:font-semibold px-4 w-4">
                Contact
              </Link>
              <Link to={"/grocery"} className="hover:font-semibold px-4 w-4">
                Grocery
              </Link>
              <Link to={"/"} className="hover:font-semibold px-4 w-4">
                Support
              </Link>
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex flex-col my-1 py-1 gap-2">
              <Link
                to={"/https://facebook.com/UrbanTastes"}
                className="hover:font-semibold px-4"
                target="_blank"
              >
                Facebook
              </Link>
              <Link
                to={"https://twitter.com/Tanzeem_Dev"}
                className="hover:font-semibold px-4"
                target="_blank"
              >
                Twitter
              </Link>
              <Link
                to={"https://instagram.com/UrbanTastes"}
                className="hover:font-semibold px-4"
                target="_blank"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
