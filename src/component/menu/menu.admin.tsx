import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MenuAdmin extends Component {
  render() {
    return (
      <ul className="ml-auto navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/usuario">
            <i className="fas fa-home"></i>
            usuario <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/consulta">
            <i className="fas fa-project-diagram"></i> Consulta
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout">
            <i className="fas fa-sign-in-alt"></i> Logout
          </Link>
        </li>
      </ul>
    );
  }
}
export default MenuAdmin;
