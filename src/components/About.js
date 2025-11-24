import React from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends React.Component {

  constructor(){
    super()
    console.log("parent props contructor")
  }

componentDidMount(){
  console.log("parent component has mounted")
}

render(){
console.log("parent  render props");
  return (
    <div>
      <h1>This is About Page</h1>
      <User name="Animesh Siddh functional component"/>
      <UserClass name="Animesh siddh Class Based component" myId={1}/>
      {/* <UserClass name="Animesh siddh Class2 Based component" myId={2}/> */}
    </div>
  )};
};

export default About;
