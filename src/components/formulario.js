import React from "react";

class Formulario extends React.Component {
state = {
      nombre: "",
      apellidos: "",
      telefono: "",
      email: "",
      descripcion: "" };

valueToState = ({name, value}) => {
  this.setState(() => {
    return { [name]: value };
  });
};

  render() {
    return (
      <div className="formulario">
        <form>
          <h2 className="formtitle"><b>Formulario</b></h2>    
          <input name="nombre" className="input" type="text" onChange={event => this.valueToState(event.target)} placeholder="Nombre" required autofocus></input>        
          <input name="apellidos" className="input" type="text" onChange={event => this.valueToState(event.target)} placeholder="Apellidos" required></input>
          <input name="telefono" className="input" type="text" onChange={event => this.valueToState(event.target)} placeholder="Número teléfonico" required></input>         
          <input name="email" className="input" type="text" onChange={event => this.valueToState(event.target)} placeholder="E-mail" required></input>          
          <input name="descripcion" className="input" type="text" onChange={event => this.valueToState(event.target)} placeholder="Descripción" required></input>
          <div className="Terminos"><p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p></div>

          <button className="btnf" type="submit"><b>Enviar</b></button>
          <div className="registro"> <p><a href="#">¿Ya se ha registrado?</a></p></div>
        </form>
      </div>
    );
  }
}

export default Formulario;