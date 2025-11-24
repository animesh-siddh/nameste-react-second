import React, { useEffect } from "react";

const Contact = () => {


useEffect(()=>{

console.log("contact useEffect")


return ()=>{
  console.log("contact unmount")
}

})
console.log("contact render")

  return (
    <div>
      <h1>THis is Contact Page</h1>
    </div>
  );
};

export default Contact;
