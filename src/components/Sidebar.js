import React, { Component } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Route } from "react-router-dom";
import SideNav, {
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./../styles/sidebar.scss";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainClass: "sl__collapsed",
      activeFlag: "dashboard",
    };
    this.onToggle = this.onToggle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onToggle(val) {
    if (val) {
      this.setState({
        mainClass: "sl__expanded",
      });
    } else {
      this.setState({
        mainClass: "sl__collapsed",
      });
    }
  }

  onSelect(location, history, selected) {
    const to = selected === "dashboard" ? "/" : "/" + selected;
    if (location.pathname !== to) {
      history.push(to);
    }
    this.setState({
      activeFlag: selected
    })
  }

  render() {
    let { mainClass, activeFlag } = this.state;
    return (
      <Router>
        <Route
          render={({ location, history }) => (
            <React.Fragment>
              <SideNav
                onSelect={(selected) =>
                  this.onSelect(location, history, selected)
                }
                onToggle={this.onToggle}
              >
                <SideNav.Toggle componentClass="button" />
                <SideNav.Nav>
                  <NavItem
                    eventKey="dashboard"
                    active={activeFlag === "dashboard" ? true : false}
                  >
                    <NavIcon>
                      <FontAwesomeIcon icon={faHome} />
                    </NavIcon>
                    <NavText>Dashboard</NavText>
                  </NavItem>
                  <NavItem
                    eventKey="inventory"
                    active={activeFlag === "inventory" ? true : false}
                  >
                    <NavIcon>
                      <i className="fa fa-bar-chart" aria-hidden="true"></i>
                    </NavIcon>
                    <NavText>Inventory</NavText>
                  </NavItem>
                </SideNav.Nav>
              </SideNav>
              <main className={"sl__main " + mainClass}>
                <Routes />
              </main>
            </React.Fragment>
          )}
        />
      </Router>
    );
  }
}

export default Sidebar;
