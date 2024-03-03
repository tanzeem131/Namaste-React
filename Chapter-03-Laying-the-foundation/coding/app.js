import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: " heading " },
  `Let's do some fun with react🤩😉`
);

const jsxHeading = <h1 id="heading">Let's do some fun with react🤩😉</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
