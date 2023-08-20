import React from "react";
import ReactDOM from "react-dom/client";

//React element
const Title = () => (
  <div>
      <h1 className="heading">Hello World</h1>
      <h1>Hello</h1>
  </div>
);

// React functional component
// 3 ways to write component in component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {Title()} 
    <Title></Title>
    <h1 className="heading">Hello functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(HeadingComponent)
root.render(<HeadingComponent />);

