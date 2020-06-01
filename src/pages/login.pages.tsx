import React, { Component } from "react";
import auth from "../lib/auth.lib";

import "../component/styles/Login.css";

interface IState {
  email: string;
  password: string;
}

type FormElement = React.FormEvent<HTMLFormElement>;

class Login extends Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.handlerOnChange = this.handlerOnChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      email: e.target.value,
      password: e.target.value,
    });
  }

  handlerSubmit(e: FormElement) {
    e.preventDefault();

    /**validacion por api */
    console.log("submit...!");

    const token: string = "tokenDeLaApiConsultada";

    auth.login(() => {
      this.props.auth(true, true, 1);
      this.props.history.push("/dashboard");
    }, token);

    console.log(auth.isAuthentication());
  }

  render() {
    return (
      <div className="row justify-content-sm-center">
        <div className="col-sm-3">
          <div className="card text-center bg-danger">
            <div className="card-body">
              <h3>INGRESO</h3>
              <p>sistema de consultas</p>
              <form onSubmit={this.handlerSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    onChange={this.handlerOnChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Contraseña"
                    onChange={this.handlerOnChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Send"
                  className="btn btn-outline-light btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
