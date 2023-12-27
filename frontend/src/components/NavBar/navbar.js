import React from "react";
import BlankNavbar from "../../assets/images/mobileLoginNav.png";
import "./navbar.css";
import { Link } from "react-router-dom";
const NavWithoutLogin = (props) => {
  return (
    <div>
      <nav className="homePage--Navbar">
        <img src={BlankNavbar} alt="navWithoutLogin" />
      </nav>
      <div className="navInfo">
        <div className="mobileNumber">
          <i className="fa-solid fa-phone-volume"> </i>
          <span> 912121131313</span>
        </div>
        <div className="offAndShopNow">
          Get 50% off on selected items | shop now
        </div>
        <div>
          <span>
            {props.Login && (
              <Link className="login--SignButton" to="/login">
                Login
              </Link>
            )}
          </span>
          <span>
            {props.Signup && (
              <>
                <span> | </span>
                <Link className="login--SignButton" to="/signup">
                  Signup
                </Link>
              </>
            )}
          </span>
          <span>
            {props.Logout && (
              <Link className="login--SignButton" to="/login" >
                Logout
              </Link>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavWithoutLogin;
