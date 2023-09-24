import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import logout from "../scripts/logout";
function Navbar() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    console.log(token);
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const mobileMenuClicked = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const mobileNavClicked = (event) => {
    setIsMobileMenuActive(false);
    event.preventDefault();
  };

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("hello");
    logout();
    setIsLogin(false);
    console.log(localStorage.getItem("refresh_token"));
  };
  return (
    <div className="navbar">
      <ul className="desktop-nav">
        <img src={logo} alt="logo" />
        <Link to="/home">
          <li>
            <span className="material-symbols-outlined">home</span>Home
          </li>
        </Link>
        <li>
          <span className="material-symbols-outlined">category</span>
          Products
        </li>
        <Link to="about/">
          <li>
            <span className="material-symbols-outlined">info</span>
            About
          </li>
        </Link>
        <Link to="/dashboard">
          <li>
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </li>
        </Link>
        {!isLogin ? (
          <Link to="auth/">
            <li>
              <span className="material-symbols-outlined">login</span>
              Logout
            </li>
          </Link>
        ) : (
          <li onClick={(e) => handleLogout(e)}>Logout</li>
        )}
      </ul>
      <div
        className={`hamburger-menu ${isMobileMenuActive && "menu-active"}`}
        onClick={mobileMenuClicked}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`mobile-nav ${isMobileMenuActive ? "active" : "inactive"}`}
      >
        <Link
          to="/home"
          onClick={(e) => {
            mobileMenuClicked(e);
          }}
        >
          <li>Home</li>
        </Link>
        <li>Products</li>
        <Link to="about/">
          <li>About</li>
        </Link>
        {!isLogin ? (
          <Link
            onClick={(e) => {
              mobileMenuClicked(e);
            }}
            to="auth/"
          >
            <li>Login</li>
          </Link>
        ) : (
          <li onClick={(e) => handleLogout(e)}>Logout</li>
        )}
      </div>
    </div>
  );
}

export default Navbar;
