import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MenuInicial extends Component {
  render() {
    return (
      <ul className="ml-auto navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-home"></i>
            Home <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signin">
            <i className="fas fa-sign-in-alt"></i> SignIn
          </Link>
        </li>
      </ul>
    );
  }
}
export default MenuInicial;
