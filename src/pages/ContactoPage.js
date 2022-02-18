import React, {useState} from "react";
import '../styles/components/pages/ContactoPage.css';
import axios from 'axios';


const ContactoPage = (props) => {
    

    const initialForm ={
        name:'',
        email:'',
        subject:'Jurídico',
        message:''
    }

   

    const [sending,setSending]=useState(false);
    const [msg, setMsg]=useState('');
    const [formData,setFormData] = useState(initialForm);

    const handleChange = e =>{
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response=await axios.post('https://opjuridicocontable-backend.herokuapp.com/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error===false){
            setFormData(initialForm)
        }
     }
    

    return (
        <main>
            <div className="formulario">
                <h3>Contacto</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlfor="name">Nombre: </label>
                        <input value={formData.name} onChange={handleChange}  type="text" id="name" name="name" placeholder="Su nombre"  required
                         />
                    </div>
                    <div>
                        <label htmlfor="email">Email:</label>
                        <input value={formData.email} onChange={handleChange} type="email" name="email" placeholder="your@email.com" required />
                    </div>
                    <div>
                        <label htmlfor="subject">Motivo:</label>
                        <select id="subject" name="subject" value={formData.subject} onChange={handleChange} >
                            <option value="Juridico"  >Jurídico</option>
                            <option value="Contable"  >Contable</option>
                        </select>
                        
                    </div>
                    <div>
                        <label htmlfor="message">Comentarios:</label>
                        <textarea id="message" name="message" placeholder="Escriba sus comentarios aqui." required value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                    <div className="boton">
                        <input type="submit" value="enviar" className="btn-enviar" />
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