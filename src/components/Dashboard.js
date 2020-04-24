import React from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import '../styles/dashboard.scss';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hello world</h1>
        <FontAwesomeIcon icon={faThumbsUp} />
      </div>
    );
  }
}

export default withRouter(Dashboard);