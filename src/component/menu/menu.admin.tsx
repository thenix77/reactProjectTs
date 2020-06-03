import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuAdmin extends Component {
  render() {
    return (
      <ul className="ml-auto navbar-nav">
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-university"></i> Sede
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link className="dropdown-item" to="/sede">
              <i className="fas fa-university"></i> Sede
            </Link>
            <Link className="dropdown-item" to="/escuela">
              <i className="fas fa-school"></i> Escuela
            </Link>
            <Link className="dropdown-item" to="/cursos">
              <i className="fas fa-book"></i> Cursos
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/alumnos">
            <i className="fas fa-users"></i> Alumnos
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
