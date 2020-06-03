import React, { Component } from "react";
import AlumnoImg from "../component/images/alumno.png";

import Moment from "react-moment";
import "moment-timezone";

import "./styles/cardalumno.css";

interface IProps {
  student: any;
  key: number;
}

class CardAlumno extends Component<IProps> {
  render() {
    return (
      <div className="card bg-dark cardsize">
        <div className="row no-gutters">
          <div className="col-md-4">
            <div className="imagen bg-white">
              <img src={AlumnoImg} alt="foto" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-title">
                {this.props.student.lastname} {this.props.student.firstname}
              </div>

              <p className="card-text">{this.props.student.email}</p>
            </div>
            <div className="card-footer">
              <p className="card-text">
                Ingreso hace:&nbsp;
                <small className="text-muted">
                  <Moment fromNow>{this.props.student.last_login_date}</Moment>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardAlumno;
