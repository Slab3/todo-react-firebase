import React from 'react';

interface IHeaderProps {
  search: string
  onChangeSearch(event: React.ChangeEvent<HTMLInputElement>) :void
}

export const Header: React.FC<IHeaderProps> = (props) => {

  return (
    <header>
      <div className="container header-content">
        <input
          type="text"
          placeholder="Search item..."
          id="search"
          value={props.search}
          onChange={props.onChangeSearch}
        />

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
