import React, { Fragment } from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import { ProtectedRoute } from "./lib/protected.route";

import "./component/styles/App.css";

import Inicio from "./pages/inicio.pages";
import Home from "./pages/home.pages";
import Login from "./pages/login.pages";
import Dashboard from "./pages/dashboard.pages";
import Menu from "./component/menu";
import Logout from "./pages/logout.pages";
import Consulta from "./pages/consultas.page";

interface IState {
  auth: boolean;
  admin: boolean;
  level: number;
}

class App extends React.Component<{}, IState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      auth: false,
      admin: false,
      level: 1,
    };

    this.handlerAuth = this.handlerAuth.bind(this);
    this.handlerLogout = this.handlerLogout.bind(this);
  }

  handlerAuth(auth: boolean, admin: boolean, level: number) {
    this.setState({
      auth,
      admin,
      level,
    });
  }

  handlerLogout() {
    this.setState({
      auth: false,
      admin: false,
      level: 1,
    });
  }

  render() {
    return (
      <Fragment>
        <Menu
          auth={this.state.auth}
          admin={this.state.admin}
          level={this.state.level}
        />
        <header className="home-section">
          <div className="dark-overlay">
            <div className="home-inner">
              <div className="containeer">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props: any) => (
                      <Inicio
                        {...props}
                        //saludo={this.state.saludo}
                        //clicked={this.handlerClick}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/home"
                    component={(props: any) => <Home {...props} />}
                  />
                  <Route
                    exact
                    path="/signin"
                    render={(props: any) => (
                      <Login {...props} auth={this.handlerAuth} />
                    )}
                  />
                  />
                  <ProtectedRoute
                    exact
                    path="/dashboard"
                    component={(props: any) => <Dashboard {...props} />}
                  />
                  />
                  <ProtectedRoute
                    exact
                    path="/consulta"
                    component={(props: any) => <Consulta {...props} />}
                  />
                  />
                  <ProtectedRoute
                    exact
                    path="/logout"
                    component={(props: any) => (
                      <Logout {...props} auth={this.handlerLogout} />
                    )}
                  />
                  />
                  <Route
                    path="*"
                    component={(props: any) => <Home {...props} />}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default App;
