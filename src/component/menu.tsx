import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/menu.css";
import Logo from "../component/images/logo.jpg";

import MenuInicial from "./menu/menu.Inicial";
import MenuAdmin from "./menu/menu.admin";
import MenuUsuario from "./menu/menu.usuario";

class Menu extends Component<any> {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            width="38"
            height="38"
            className="d-inline-block align-top"
            alt="logo"
          />
          &nbsp; WebIoT
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="container collapse navbar-collapse"
          id="navbarNavDropdown"
        >
          {this.props.auth ? (
            this.props.admin ? (
              <MenuAdmin />
            ) : (
              <MenuUsuario />
            )
          ) : (
            <MenuInicial />
          )}
        </div>
      </nav>
    );
  }
}

export default Menu;
