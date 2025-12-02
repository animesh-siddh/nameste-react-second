import { createContext } from "react";



const UserContext = createContext({
  loggedInUserName: "dummyUser",
});


export default UserContext;
