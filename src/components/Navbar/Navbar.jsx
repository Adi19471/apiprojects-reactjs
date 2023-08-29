import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" to="">
          REACT PROJECTS API WORKS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white " aria-current="page" to="">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="">
                ABOUT
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link text-white dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                API's
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/Movies">
                    Movies
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Allfood">
                    Food
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/Background">
                    Background
                  </Link>
                </li>

                <li>
                  {" "}
                  <Link className="dropdown-item  " to="/Signature">
                    Signature
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white "
                to="/Signature"
                tabIndex={-1}
              >
                Signature
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
