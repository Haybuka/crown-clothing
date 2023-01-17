import React,{useContext} from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../context/user.context";
import './navigation.styles.scss'
const Navigation = () => {
  const {currentUser} = useContext(UserContext)
  // console.log(currentUser)
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo"/>
        </Link>
        <ul className="nav-links-container">
          <li>
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/auth">
              SIGN IN
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
