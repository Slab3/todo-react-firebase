import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="header-content container">
        <input type="text" placeholder="Search item..." id="search" autoComplete={'off'}/>

        <div>
          <a href="/" className="logo"> Todo App! </a>
        </div>

        <div>Log In / Log out</div>
      {/** Logo - on center, Search - left, Log in/Log out - right top*/}
      </div>
    </header>
  )
}
