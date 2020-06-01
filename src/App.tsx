import React, { Fragment } from 'react';
import {Switch,Route, RouteComponentProps} from 'react-router-dom'
import Menu from './component/menu'

import './component/styles/App.css';

import Inicio from './pages/inicio.pages'
import Home from './pages/home.pages';
import Login from './pages/login.pages'

import Dashboard from './pages/dashboard.pages';
import Logout from './pages/logout.pages';

interface IState{
  auth:boolean
  admin:boolean
  level:number
  saludo:string
}


class App extends React.Component<{},IState>{
  constructor(props:RouteComponentProps){
    super(props)
    this.state = {
      auth:false,
      admin:true,
      level:3,
      saludo:'hola bicholin'
    }
    
    this.handlerAuth = this.handlerAuth.bind(this)
  }

handlerAuth(validation:boolean){

  console.log(`auth: ${validation}`)
  this.setState({
    auth:validation
  })
  console.log( this.state)
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
                        saludo={this.state.saludo}
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
                  <Route
                    exact
                    path="/dashboard"
                    component={(props: any) => <Dashboard {...props} />}
                  />
                  />
                  <Route
                    exact
                    path="/logout"
                    component={(props:RouteComponentProps) => <Logout {...props} />}
                  />
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
