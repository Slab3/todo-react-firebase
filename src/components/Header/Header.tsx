import React, {useState} from 'react';

const Header: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  //need to move this state to main component for search
  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  };

  return (
    <header>
      <div className="container header-content">
        <input
          type="text"
          placeholder="Search item..."
          id="search"
          value={search}
          onChange={searchChangeHandler}
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
