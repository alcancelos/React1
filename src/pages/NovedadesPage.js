
import '../styles/components/pages/NovedadesPage.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import NovedadItem from "../components/Novedades/novedadItem";

import moment from 'moment';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(()=>{
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('https://opjuridicocontable-backend.herokuapp.com/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();

    }, []);
    return(

        
        <main>
            <h3>Novedades</h3>
            <div className="Novedades">
        {loading ?(
            <p>Cargando...</p>
        ) : (
                novedades.map(item=> <NovedadItem key={item.id_novedad}
                title={item.titulo} imagen={item.imagen} 
                contenido={item.contenido} fecha={moment(item.fecha).format('DD-MM-YYYY')}/>)
        )}</div></main>       
    )   
}

export default NovedadesPage;