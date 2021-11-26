import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
        <nav>
            <div className="dropdown">
                <button className="dropbtn"><i className="fas fa-bars"></i></button>
                <div className="dropdown-content">
                    <NavLink activeClassName="activo" exact to="/">Home</NavLink>
                    <NavLink activeClassName="activo" exact to="/nosotros">Nosotros</NavLink>
                    <NavLink activeClassName="activo" exact to="/servicios">Servicios</NavLink>
                    <NavLink activeClassName="activo" exact to="/galeria">Galería</NavLink>
                    <NavLink activeClassName="activo" exact to="/novedades">Novedades</NavLink>
                    <NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Nav;