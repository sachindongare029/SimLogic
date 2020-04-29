import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <div className="sl__navbar">
        <nav className="navbar navbar-light justify-content-end">
          <div className="navbar__action__control">
            <form className="form-inline">
              <div className="input-field">
                <input id="search" type="text" placeholder="Search" />
                <div className="icon-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  </svg>
                </div>
              </div>
            </form>
            <div className="navbar__icons">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <i class="fa fa-bell" aria-hidden="true"></i>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
