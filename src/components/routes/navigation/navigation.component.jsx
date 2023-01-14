import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import './navigation.styles.scss'
const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo"/>
        </Link>
        <ul className="nav-links-container">
          <li>
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navigation;
