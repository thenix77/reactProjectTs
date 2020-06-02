import React, { Component } from "react";
import auth from "../lib/auth.lib";
import apiJson from "../key.json";

import "../component/styles/Login.css";

interface IState {
  email?: string;
  password?: string;
  token: string;
  auth: boolean;
  loading: boolean;
}

type FormElement = React.FormEvent<HTMLFormElement>;

class Login extends Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
      token: "",
      auth: false,
      loading: false,
    };

    this.handlerOnChangeEmail = this.handlerOnChangeEmail.bind(this);
    this.handlerOnChangePswd = this.handlerOnChangePswd.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerOnChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      email: e.target.value,
    });
  }

  handlerOnChangePswd(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      password: e.target.value,
    });
  }

  async handlerSubmit(e: FormElement) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    /**validacion por api */
    await fetch(`${apiJson.api}/auth/signin`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((db) => db.json())
      .then((data) => {
        this.setState({
          token: data.token,
          auth: data.auth,
        });
      });

    /** */
    console.log("submit...!");

    if (this.state.auth) {
      const token: string = this.state.token;

      auth.login(() => {
        this.props.auth(true, true, 1);
        this.props.history.push("/dashboard");
      }, token);
    } else {
      this.setState({
        email: "",
        password: "",
        loading: false,
      });
    }
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
                    onChange={this.handlerOnChangeEmail}
                    value={this.state.email}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Contraseña"
                    onChange={this.handlerOnChangePswd}
                    value={this.state.password}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-light btn-block"
                  disabled={this.state.loading}
                >
                  {this.state.loading ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    <i className="fas fa-sign-in-alt"></i>
                  )}
                  &nbsp; Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
