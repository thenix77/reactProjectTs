import React, { Component } from "react";
import CardAlumno from "../component/CardAlumno";
import ApiJson from "../key.json";

import "../component/styles/alumno.css";

type FormElement = React.FormEvent<HTMLFormElement>;

interface IState {
  idsinfo?: string;
  students?: [];
  loading: boolean;
}

class Alumnos extends Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      idsinfo: "",
      loading: false,
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerFind = this.handlerFind.bind(this);
  }

  handlerChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      idsinfo: e.target.value,
    });
  }
  async handlerFind(e: FormElement) {
    e.preventDefault();
    this.setState({
      loading: true,
    });

    console.log(this.state);
    await fetch(`${ApiJson.api}/bbstat/users/findbyId/${this.state.idsinfo}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("token") || "",
      },
    })
      .then((db) => db.json())
      .then((data) => {
        this.setState({
          students: data.users,
        });
      });

    this.setState({
      loading: false,
    });
  }

  render() {
    const card = this.state.students?.map((student, index) => (
      <CardAlumno student={student} key={index} />
    ));

    return (
      <div className="row justify-content-sm-center">
        <div className="col-lg-3">
          <div className="container">
            <div className="card text-center bg-danger">
              <div className="card-header">
                <div className="card-title">Busqueda por IDSinfo</div>
              </div>
              <div className="card-body">
                <form onSubmit={this.handlerFind}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="idsinfo"
                      placeholder="ID SINFO"
                      minLength={3}
                      onChange={this.handlerChange}
                      value={this.state.idsinfo}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-outline-light btn-block"
                    >
                      {this.state.loading ? (
                        <i className="fas fa-cog fa-spin"></i>
                      ) : (
                        <i className="fas fa-search"></i>
                      )}
                      &nbsp;Buscar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="container">
            <div className="card-columns">{card}</div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Alumnos;
