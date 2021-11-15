import React from "react";

const ContactoPage = (props) => {
    return (
        <main>
            <div className="formulario">
                <h3>Contacto</h3>
                <form method="post" action="">
                    <div>
                        <label for="name">Nombre: </label>
                        <input type="text" id="name" name="name" value="" placeholder="Su nombre" required="required"
                            autofocus />
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" value="" placeholder="your@email.com" required="required" />
                    </div>
                    <div>
                        <label for="subject">Motivo:</label>
                        <select id="subject" name="subject">
                            <option value="hello">Jurídico</option>
                            <option value="quote">Contable</option>
                        </select>
                    </div>
                    <div>
                        <label for="message">Comentarios:</label>
                        <textarea id="message" name="message" placeholder="Escriba sus comentarios aqui." required></textarea>
                    </div>
                    <div className="boton">
                        <input type="submit" value="enviar" class="btn-enviar" />
                    </div>
                </form>


            </div>
            <div className="infoContacto">

                <div className="card">
                    <p>Teléfono: 20256-7616</p>
                    <p>Email: info@opjuridicocontable.com.ar</p>
                    <p>Dirección: Colombres 23 4A</p>
                </div>


            </div>
        </main>
    );
}

export default ContactoPage;