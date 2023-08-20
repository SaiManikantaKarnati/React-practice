import React from "react";
import ReactDOM from "react-dom/client";

const container = ReactDOM.createRoot(document.getElementById('container'));
/* If we have multiple children, then we need to write them in an array which gives array of children */


  // <div id="parent">
  //   <div id="child">
  //     <h1>H1 is in nested div</h1>
  //     <h2>H2 is in nested div</h2>
  //   </div>
  //   <div id="child2">
  //     <h2>H2 is in nested div</h2>
  //     <h1>H1 is in nested div</h1>
  //    </div>
  // </div>

const parent = React.createElement(
  'div',
  {id: "parent"},
  [React.createElement(
    'div',
    {id: "child"},
    [
      React.createElement(
        'h1',
        {},
        'H1 is in nested div'
      ),
      React.createElement(
        'h2',
        {},
        'H2 is in nested div'
      )
      ]
  ),
  React.createElement(
    'div',
    {id: "child"},
    [
      React.createElement(
        'h1',
        {},
        'H1 is in nested div'
      ),
      React.createElement(
        'h2',
        {},
        'H2 is in nested div'
      )
      ]
  )
]
);

console.log(parent);
container.render(parent); //Returns an object
/* If we have multiple children, then we need to write them in an array which gives array of children */
