import React from 'react';
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {

  return (
    <header>
      <div className="container header-content">
        <div>
          <NavLink to="/" className="logo"> Todo App! </NavLink>
        </div>

        <div>
          <NavLink to="/SignUp" className={"navBar signUp"}>Register</NavLink>
          <NavLink to="/SignIn" className={"navBar signIn"}>Sign In</NavLink>
        </div>
      </div>
    </header>
  )
};
export default Header;
