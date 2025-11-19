import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [reactVariable, setReactVariable] = useState("Login");

  return (
    <div className="headerContainer">
      <div className="logo">
        <img className="imgLogo" src={LOGO_URL} alt="restaurant" />
      </div>
      <div className="navContainer">
        <ul className="listContainer">
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
