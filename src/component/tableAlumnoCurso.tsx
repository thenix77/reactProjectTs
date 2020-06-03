import React, { Component } from "react";
import ApiJSON from "../key.json";

import DataTable, { createTheme } from "react-data-table-component";

interface IProps {
  student: any;
  //key: number;
}

interface IState {
  courses?: any;
}

class TablaCursosAlumno extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      courses: [],
    };
  }
  async componentDidMount() {
    await fetch(
      `${ApiJSON.api}/bbstat/users/courses/${this.props.student.pk1}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: localStorage.getItem("token") || "",
        },
      }
    )
      .then((db) => db.json())
      .then((data) => {
        this.setState({
          courses: data.courses,
        });

        console.log(this.state);
      });
  }

  render() {
    createTheme("solarized", {
      text: {
        primary: "#268bd2",
        secondary: "#2aa198",
      },
      background: {
        default: "#002b36",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#073642",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    });

    const data = this.state.courses;

    const columns = [
      {
        name: "curso",
        selector: "course_name",
        sortable: true,
      },
      {
        name: "year",
        selector: "course_id",
        sortable: true,
        right: true,
      },
    ];

    const paginationOptions = {
      rowsPerPageText: "Fila por pagina",
      rangeSeparatorText: "de",
      selectAllRowsItem: true,
      selectAllRoewsItemText: "todos",
    };

    return (
      <div>
        <div>
          curso:{" "}
          <DataTable
            columns={columns}
            data={data}
            theme="solarized"
            pagination
            paginationIconFirstPage
            paginationIconNext
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10]}
            paginationComponentOptions={paginationOptions}
          />
        </div>
      </div>
    );
  }
}

export default TablaCursosAlumno;
