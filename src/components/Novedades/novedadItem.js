import React from 'react';

const NovedadItem = (props) => {
    const { title, imagen, fecha, contenido,body } = props;

    return (
        <div className="Novedad">
            <h3>{title}</h3>   
            <img src={imagen} alt=''/>       
            <h4>{fecha}</h4>
            <p>{contenido}</p>
            
            
            <div dangerouslySetInnerHTML={{ __html: body}}/>
        </div>

    );
}

export default NovedadItem;