import React from "react";
import { createRoot } from "react-dom/client";

// const heading = React.createElement("h1",{id:"heading"},"Hello world");

// React.createElement => return object => render(object) => converts into HTML in browser

// console.log("heading",heading)

//

// const headingJSX = <h1 className="heading" tabIndex={5}>Hello world JSX</h1>

// JSX=>Babel=>React.createElement=>return object=>render(object)=>converts into HTML in browser;

// const HeadingComponent = ({ children }) => (
//   <>
//     {children}
//     <h1>This is Heading Component</h1>
//   </>
// );

// Component COmpostion

// const Hari = (
//   <>
//     <HeadingComponent>This is Hari component</HeadingComponent>{" "}
//     <h1>THis is my h1 element</h1>
//   </>
// );

const header = () => <h1 className="head" id="hello">This is header component</h1>


const Varialbe = header

// console.log("headingJSX",headingJSX)

const root = createRoot(document.getElementById("root"));

root.render(<Varialbe/>);

