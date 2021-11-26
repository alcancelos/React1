import React from "react";
import '../styles/components/pages/GaleriaPage.css';
import '../styles/lightbox.css'


const GaleriaPage = (props) => {
    return (
        <main>

            <div className="galeria">
                <h3>Galería</h3>
                <a className=" foto" href="./images/galeria/accidentes.jpg" data-lightbox="example-set" data-title="Accidentes"><img
                    className="example-image" src="./images/galeria/accidentes.jpg" alt="" />
                    <div className="Descripcion">Accidentes </div>
                </a>

                <a className=" foto" href="./images/galeria/contratos.jpg" data-lightbox="example-set" data-title="Contratos"><img
                    className="example-image" src="./images/galeria/contratos.jpg" alt="" />
                    <div className="Descripcion">Contratos </div>
                </a>
                <a className=" foto" href="./images/galeria/divorcio.jpg" data-lightbox="example-set" data-title="Divorcios"><img
                    className="example-image" src="./images/galeria/divorcio.jpg" alt="" />
                    <div className="Descripcion">Divorcios </div>
                </a>
                <a className=" foto" href="./images/galeria/impuestos.jpg" data-lightbox="example-set" data-title="Impuestos"><img
                    className="example-image" src="./images/galeria/impuestos.jpg" alt="" />
                    <div className="Descripcion">Impuestos </div>
                </a>
                <a className=" foto" href="./images/galeria/pensiones.jpg" data-lightbox="example-set"
                    data-title="Pensiones y jubilaciones"><img className="example-image" src="./images/galeria/pensiones.jpg" alt="" />
                    <div className="Descripcion">Jubilaciones y Pensiones </div>
                </a>
                <a className=" foto" href="./images/galeria/sucesiones.jpg" data-lightbox="example-set" data-title="Sucesiones"><img
                    className="example-image" src="./images/galeria/sucesiones.jpg" alt="" />
                    <div className="Descripcion">Sucesiones </div>
                </a>

            </div>





        </main>
    );
}

export default GaleriaPage;