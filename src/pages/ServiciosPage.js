import React from "react";

const ServiciosPage = (props) => {
    return (
        <main>
            <div class="Servicio">
                <div class="Info">
                    <h4>Servicios Jurídicos</h4>
                    <p>Sucesiones. Jubilaciones y pensiones. Pensiones no contributivas. PUAM. Servicio doméstico.
                        Constitución de sociedades. Laboral.
                        ART - Actuación ante comisiones médicas.
                        Divorcios - Alimentos - Régimen de comunicación.
                        Civil y Comercial - Contratos.</p>
                </div>
                <div class="ImagenServicio">
                    <img src="images/sucesion.jpg" alt="Sucesion" />
                </div>
            </div>
            <div class="Servicio">
                <div class="Info">
                    <h4>Servicios Contables</h4>
                    <p>Liquidación mensual y anual de impuestos nacionales, provinciales y municipales: IVA - Ganancias - Bienes Personales -
                        Ingresos Brutos (Local / Convenio Multilateral). Asesoramiento y atención a
                        Monotributistas: Inscripción - Recategorización - Modificación de Datos - Bajas.
                        Regímenes de Información. Inscripciones ante organismos nacionales y provinciales.
                        Confección y presentación de moratorias y planes de facilidades de pago.
                        Atención de inspecciones y requerimientos.</p>
                </div>
                <div class="ImagenServicio">
                    <img src="images/impuestos.jpg" alt="Sucesion" />
                </div>
            </div>
        </main>
    );
}

export default ServiciosPage;