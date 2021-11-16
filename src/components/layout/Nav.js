import React from "react";
import { Link } from "react-router-dom";


const Nav = (props) => {
    return (
        <nav>
            <div className="dropdown">
                <button className="dropbtn"><i className="fas fa-bars"></i></button>
                <div className="dropdown-content">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/novedades">Novedades</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>


                </div>



            </div>
        </nav>
    );
}

export default Nav;