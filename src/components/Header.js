import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [reactVariable, setReactVariable] = useState("Login");

  const onlineStatus = useOnlineStatus();

  console.log("onlineStatus",onlineStatus)

  return (
    <div className="flex justify-between items-center bg-pink-200">
      <div className="w-48">
        <img className="imgLogo" src={LOGO_URL} alt="restaurant" />
      </div>
      <div className="m-2">
        <ul className="px-2.5 m-0.5 flex gap-5.5 text-3xl font-medium">
          <Link
            to={{
              pathname: "/",
            }}
          >
            online Status : {onlineStatus ? "🟢" : "🔴"}
          </Link>

          <Link
            to={{
              pathname: "/",
            }}
          >
            Home
          </Link>
          <Link
            to={{
              pathname: "/about",
            }}
          >
            About
          </Link>
          <Link
            to={{
              pathname: "/contact",
            }}
          >
            Contact
          </Link>
          <Link
            className="login"
            onClick={() =>
              reactVariable === "Login"
                ? setReactVariable("Logout")
                : setReactVariable("Login")
            }
          >
            {reactVariable}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
