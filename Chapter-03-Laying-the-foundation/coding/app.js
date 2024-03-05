import React from "react";
import ReactDOM from "react-dom/client";

// JSX=>Babel transpiled it to React.createElement => React Element--is a Javascript object => HTMLElement(render)

//React Element
// const jsxHeading = (
//   <h1 id="heading" tabIndex="5">
//     Let's do some fun with react🤩😉
//   </h1>
// );

/*
//React Component
const Title = () => (
  <h1 id="heading" tabIndex="5">
    Let's do some fun with react🤩😉🤩😉🤩😉🤩😉🤩😉
  </h1>
);

//Component Composition
const HeadingComponent = () => (
  <div className="container">
    <Title />
    <h1 id="heading">Let's do some fun with react🤩😉</h1>
  </div>
);

*/

/* Injecting javascript code in react component using {}
//React element
const title = (
  <h1 id="heading" tabIndex="5">
    Let's do some fun with react🤩😉🤩😉🤩😉🤩😉🤩😉
  </h1>
);

//Component Composition - putting one component into other 
const HeadingComponent = () => (
  <div className="container">
    {title}
    <h1 id="heading">Let's do some fun with react🤩😉</h1>
  </div>
);
*/

//React component in the end is a javascript function
const Title = () => (
  <h1 id="heading" tabIndex="5">
    Let's do some fun with react🤩😉🤩😉🤩😉🤩😉🤩😉
  </h1>
);

//Component Composition
const HeadingComponent = () => (
  <div className="container">
    <Title />
    <Title></Title>
    {Title()}
    <h1 id="heading">Let's do some fun with react🤩😉</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
