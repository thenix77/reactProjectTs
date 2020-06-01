import React, { Component } from "react";

class Logout extends Component<any> {
  componentDidMount() {
    localStorage.removeItem("token");
    this.props.auth();
    this.props.history.push("/");
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
