import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signin">SignIn</Link>
          </li>
          <li>
            <Link to="/signout">SignOut</Link>
          </li>
          <li>
            <Link to="/signout">SignOut</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
