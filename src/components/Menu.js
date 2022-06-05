import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="nav-link" to='/'> Menu | </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/calculadora'}> Calculadora de suma y multiplicación | </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/gradosCF'}> Calculadora °C Y °F | </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/formulario'}> Formulario </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Menu