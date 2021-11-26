import React from "react";
import '../../styles/components/layout/Header.css'
//import '../../styles/components/layout/HeaderMovile.css'

const Header = (props) => {
    return (
        <header>
            <img class="Logo" src="./images/LogoBlanco.png" alt="Op" />
            <h1>Jurídico Contable</h1>
        </header>
    );
}

export default Header;