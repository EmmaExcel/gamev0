import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="search-bar">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="nav-center">
          <nav>
            <ul>
              <li>
                <Link to="/">Games</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="category">
          <i class="fa-solid fa-table-cells-large"></i>
          <a href="#">Categories</a>
        </div>

        <div className="options">
          <div className="notification">
            <i class="fa-solid fa-bell"></i>
          </div>

          <div className="profile">
            <i class="fa-solid fa-user-group"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
