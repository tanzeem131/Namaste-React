/*
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world by react"
);

console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

*/

/*
 *<div class="parent">
 *    <div class='child>
 *        <h1>hey i am an h1 tag</h1>
 *        <h2>hey i am an h2 tag</h2>
 *    </div>
 *</div>;
 */
//create the above nested elements using react

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hey i am an h1 tag"),
    React.createElement("h2", {}, "hey i am an h2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
