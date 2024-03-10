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
const RestaurantCard = (props) => {
  const { resImg, resName, cuisine, deliveryTime, ratings } = props;

  return (
    <div className="res-card">
      <img className="res-logo" src={resImg} />
      <div className="resDetails">
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{ratings} ⭐ ratings</h4>
      </div>
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
        <RestaurantCard
          resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/59b64f9bb67234987652437f21d379c2"
          resName="Mojo pizza"
          cuisine="Pizza, Italian fast food"
          deliveryTime="20"
          ratings="4.5"
        />
        <RestaurantCard
          resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/szg5m78kakinxlin6yfo"
          resName="Biryani house"
          cuisine="Biryani, North Indian"
          deliveryTime="30"
          ratings="4.1"
        />
        {/* <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard /> */}
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
