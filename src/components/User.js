import React, { useState } from "react";

const User = ({name}) => {
  const [count] = useState(0);

  return (
    <div className="function based">
      <h1>count : {count}</h1>
      <h1>{name}</h1>
      <h2>Location Indore</h2>
    </div>
  );
};

export default User;
