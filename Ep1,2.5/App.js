import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "h1 tag 1"),
    React.createElement("h2", {}, "h2 tag 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1 tag 2"),
    React.createElement("h2", {}, "h2 tag 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
