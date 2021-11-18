import React from "react";
import { Link } from "react-router-dom";


const Nav = (props) => {
    return (
        <nav>
            <div className="dropdown">
                <button className="dropbtn"><i className="fas fa-bars"></i></button>
                <div className="dropdown-content">
                    <Link to="/">Home</Link>
                    <Link to="/nosotros">Nosotros</Link>
                    <Link to="/servicios">Servicios</Link>
                    <Link to="/galeria">Galería</Link>
                    <Link to="/novedades">Novedades</Link>
                    <Link to="/contacto">Contacto</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;