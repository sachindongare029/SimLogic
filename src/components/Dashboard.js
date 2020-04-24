import React from "react";
// import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/dashboard.scss";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="sl__dashboard">
        <nav className="navbar navbar-light bg-light justify-content-between">
          <a className="navbar-brand" href="/#">Navbar</a>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default withRouter(Dashboard);
