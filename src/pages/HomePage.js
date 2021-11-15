import React from "react";

const HomePage = (props) => {
    return (
        <main>
            <div className="intro">
                <br />
                <h4>DRA. ROMINA OVIEDO PÉREZ & ASOCIADOS</h4>
                <p>Contadores Públicos y Abogados</p>
                <br />
            </div>
            <div className="Bienvenidos">
                <div className="TextoBienvenidos">
                    <h3>Bienvenidos</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur iure temporibus dolorum qui veniam, eos officia
                        nulla praesentium odit aut alias repellat molestiae! Quisquam
                        tempora tenetur odit minus, facere esse.</p>
                </div>
                <div className="ImagenBienvenidos"><img class="ImagenTarjeta" src="./images/boton2.jpg" alt="OP" /></div>
            </div>
        </main>
    );
}

export default HomePage;