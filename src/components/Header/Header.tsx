import React from 'react';

export const Header: React.FC = () => {

  return (
    <header>
      <div className="container header-content">

        <div>
          <a href="/" className="logo"> Todo App! </a>
        </div>

        <div>Log In / Log out</div>
      {/** Logo - on center, Search - left, Log in/Log out - right top*/}
      </div>
    </header>
  )
};
export default Header;
