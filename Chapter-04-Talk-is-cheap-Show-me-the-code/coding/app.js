import React from "react";
import ReactDOM from "react-dom/client";

/**
 * HEADER
 *  - logo
 *  - nav-items
 * BODY
 *  - search
 *  - restaurant container
 *    - restaurant card
 *      - restaurant img
 *      - restaurant name
 *      - star rating
 *      - cuisine
 *      - delivery time
 * FOOTER
 *  - copyright
 *  - links
 *  - contact
 *  - address
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://static.vecteezy.com/system/resources/previews/024/704/146/original/3d-illustration-icon-of-burger-fast-food-for-ui-ux-web-mobile-app-social-media-ads-png.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fiidui71tvyumw3ntb29"
      />
      <h3>pizza galleria</h3>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div
        className="search"
        style={{ backgroundColor: "lightgoldenrodyellow" }}
      >
        search
      </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
