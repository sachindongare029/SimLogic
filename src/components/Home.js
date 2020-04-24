import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import '../styles/home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hello world</h1>
        <FontAwesomeIcon icon={faThumbsUp} />
        <Link to='/about'>About</Link>
      </div>
    );
  }
}

export default withRouter(Home);