import React from "react";
import Recordatorio from "./Recordatorio";
import Opciones from "./Opciones";
import data from "./data.json";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.historial = [];
    this.state = {
      opcion: "",
      contador: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    this.historial.push(this.state.opcion);
  }

  handleClick(opcionElegida) {
    if (this.state.contador === 5) {
      alert("Fin.");
    } else {
      this.setState({
        opcion: opcionElegida,
        contador: this.state.contador + 1,
      });
    }
  }

  render() {
    return (
      <div className="layout">
        <h1 className="historia" key={data[this.state.contador].id}>
          {
            data.find(
              (cachoHistoria) =>
                cachoHistoria.id ===
                this.state.contador.toString() + this.state.opcion
            ).historia
          }
        </h1>

        <Opciones
          handleClick={this.handleClick}
          opciones={
            data.find(
              (cachoHistoria) =>
                cachoHistoria.id ===
                this.state.contador.toString() + this.state.opcion
            ).opciones
          }
        />

        <Recordatorio historial={this.historial} opcion={this.state.opcion} />
      </div>
    );
  }
}

export default Layout;
