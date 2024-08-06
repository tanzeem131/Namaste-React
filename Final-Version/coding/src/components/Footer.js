import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#FE9234] to-[#F15700] h-56 p-4 m-2 shadow-2xl">
        <div className="grid grid-cols-12 justify-evenly">
          <div className="my-1 py-1 col-span-4">
            <p>&copy; 2024 UrbanTastes. All rights reserved.</p>
          </div>
          <div className="col-span-4">
            <div className="flex flex-col my-1 py-1 gap-2">
              <a className="hover:font-semibold px-4 w-4">
                <Link to={"/about"}>About</Link>
              </a>
              <a className="hover:font-semibold px-4 w-4">
                <Link to={"/contact"}>Contact</Link>
              </a>
              <a className="hover:font-semibold px-4 w-4">
                <Link to={"/grocery"}>Grocery</Link>
              </a>
              <a className="hover:font-semibold px-4 w-4">Support</a>
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex flex-col my-1 py-1 gap-2">
              <a
                className="hover:font-semibold px-4"
                href="https://facebook.com/UrbanTastes"
                target="_blank"
              >
                Facebook
              </a>
              <a
                className="hover:font-semibold px-4"
                href="https://twitter.com/Tanzeem_Dev"
                target="_blank"
              >
                Twitter
              </a>
              <a
                className="hover:font-semibold px-4"
                href="https://instagram.com/UrbanTastes"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
