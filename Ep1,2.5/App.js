//* Importing React into our App
import React from "react";
import ReactDOM from "react-dom/client";

// React Element => ReactElement - JS Object => HTML Element (render)
// JSX - HTML-like or XML-like syntax but not the same (transpiled before it reaches javascript engine) - Parcel - Babel
// JSX =>  Babel transpiles it to React.createElement ==> ReactElement - JS Object => HTML Element (render)

//React Element is just a normal variable so can be used inside {} as a javascript code

const element = <span> !This is an element! </span>;
const elem = (
  <h2 className="xyzkans" tabIndex="5">
    Namaste
    {element}
    React using JSX
  </h2>
);
//Functional Component

const TitleComponent = () => (
  <h1 className="root" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);
// *Component Composition
const number = 1000;
const HeadingComponent = () => (
  <div id="container">
    <TitleComponent />
    <TitleComponent></TitleComponent>
    {TitleComponent()}
    {elem}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
// Three ways of calling a functional component are
// * [ <TitleComponent /> | <TitleComponent></TitleComponent> | {TitleComponent()} ]
// as a function and can be called in {} as it is just Java Script code
