import React from "react";

const NosotrosPage = (props) => {
    return (
        <main>

            <div className="Historia">
                <h3>Sobre nosotros</h3>
                <p>Somos un Estudio formado por profesionales Contadores Públicos y Abogados dedicado a brindar asesoramiento
                    integral y personalizado a nuestros clientes en materia impositiva, contable, laboral, societaria y jurídica.</p>
                <p>Brindamos, también, servicios de outsourcing (tercerización de trabajos y proyectos), consultoría, asesoramiento
                    a empleados en relación de dependencia, trabajadores independientes, emprendedores y empresas.</p>
                <p>Los invitamos a conocer nuestro sitio Web asegurándoles un servicio de alto nivel profesional, ofreciéndoles
                    soluciones concretas a sus necesidades y acompañándolos en su crecimiento.</p>
            </div>
            <div className="staff">
                <h3>Valores</h3>
                <div className="Personas">
                    <div className="Persona">
                        <img src="./images/transparencia.jpg" alt="Transparencia" />
                        <h5>Transparencia</h5>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Velit suscipit consectetur alias. Numquam quasi ullam placeat
                            perferendis amet, vitae totam libero exercitationem porro,
                            quidem quibusdam praesentium. Beatae, repellat! Iste, quae!</p>
                    </div>
                    <div className="Persona">
                        <img src="./images/impuestos.jpg" alt="Excelencia" />
                        <h5>Excelencia</h5>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Velit suscipit consectetur alias.Numquam quasi ullam placeat
                            perferendis amet, vitae totam libero exercitationem porro,
                            quidem quibusdam praesentium.Beatae, repellat!Iste, quae!</p>

                    </div>
                    <div className="Persona">
                        <img src="./images/responsabilidad.jpg" alt="Responsabilidad" />
                        <h5>Responsabilidad</h5>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Velit suscipit consectetur alias.Numquam quasi ullam placeat
                            perferendis amet, vitae totam libero exercitationem porro,
                            quidem quibusdam praesentium.Beatae, repellat!Iste, quae!</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;