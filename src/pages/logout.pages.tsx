import React, { Component } from "react";
import Auth from "../lib/auth.lib";
class Logout extends Component<any> {
  componentDidMount() {
    localStorage.removeItem("token");

    Auth.logout(() => {
      this.props.auth();
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <div>
        <h1>Saliendo del sistema...</h1>
      </div>
    );
  }
}
export default Logout;
