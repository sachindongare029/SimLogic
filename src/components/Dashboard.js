import React from "react";
// import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/dashboard.scss";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="sl__dashboard">
        <nav className="navbar navbar-light justify-content-between">
          <a className="navbar__brand" href="/#">
            Sim Logic
          </a>
          <div className="dashboard__action__control">
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
            <div className="dashboard__user">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Dashboard);
