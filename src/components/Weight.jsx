import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router';
import { Div1, Form1 } from '../styles/Styles1';
import { DivCard2, DivDatos, Section } from '../styles/Styles1'






const Weight = () => {

    const navigate = useNavigate();

    const [datos, setDatos] = useState({
        height: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        if(datos.height.length !== 0 ){
            console.log('Si tengo datos   '+datos.height)
            navigate('/Age');
        }else{
            console.log('No tengo datos')
            alert('Ingrese datos validos')
        }
        console.log(datos.height.length)
        
    }


    return (
        <Section>
            <DivDatos>
                <DivCard2>
                    <img src="https://i.ibb.co/nDWVjvS/Logo.png" alt="Logo" border="0" />
                    
                </DivCard2>
                <h4>Enter your weight</h4>
                <Fragment>
            <Form1 className="row" onSubmit={enviarDatos}>
                <Div1 className="col-md-3">
                    <input
                        type="number"
                        placeholder="78"
                        className="form-control"
                        onChange={handleInputChange}
                        name="height"></input><span>kg</span>
                </Div1>
                <button
                    type="submit"
                    >
                    Next
                </button>
            </Form1>
        </Fragment>
            </DivDatos>
        </Section>
    )
}

export default Weight