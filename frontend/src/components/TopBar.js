import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

class TopBar extends Component {

  render() {
    const { t, username, isLoggedIn, onLogoutSuccess } = this.props;

    let links = (
      <ul className="navbar-nav ml-auto">
        <li>
          <Link className="nav-link" to="/login">
            {t("Login")}
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/signup">
            {t("Sign Up")}
          </Link>
        </li>
      </ul>
    );
    if (isLoggedIn) {
      links = (<ul className="navbar-nav ml-auto">
        <li>
          <Link className="nav-link" to={`/user/${username}`}>
            {username}
          </Link>
        </li>
        <li className="nav-link" style={{ cursor: 'pointer' }} onClick={onLogoutSuccess}>
          {t('Logout')}
        </li>
      </ul>);
    }
    return (
      <div className="shadow-sm bg-light mb-2">
        <nav className="navbar navbar-light container navbar-expand">
          <Link className="navbar-brand" to="/">
            Hoaxify
          </Link>
          {links}
        </nav>
      </div>
    );
  }
}

export default withTranslation()(TopBar);
