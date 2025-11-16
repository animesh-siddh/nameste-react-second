import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logo">
        <img className="imgLogo" src={LOGO_URL} alt="restaurant" />
      </div>
      <div className="navContainer">
        <ul className="listContainer">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
