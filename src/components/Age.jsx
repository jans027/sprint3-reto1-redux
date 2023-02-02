import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router';
import { Div1, Form1 } from '../styles/Styles1';
import { DivCard2, DivDatos, Section } from '../styles/Styles1'






const Age = () => {

    const navigate = useNavigate();

    const [datos, setDatos] = useState({
        age: ''
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
        if(datos.age.length !== 0 ){
            console.log('Si tengo datos   '+datos.age)
            navigate('/Choice');
        }else{
            console.log('No tengo datos')
            alert('Ingrese datos validos')
        }
        console.log(datos.age.length)
        
    }


    return (
        <Section>
            <DivDatos>
                <DivCard2>
                    <img src="https://i.ibb.co/nDWVjvS/Logo.png" alt="Logo" border="0" />
                    
                </DivCard2>
                <h4>Enter your age</h4>
                <Fragment>
            <Form1 className="row" onSubmit={enviarDatos}>
                <Div1 className="col-md-3">
                    <input
                        type="number"
                        placeholder="28"
                        className="form-control"
                        onChange={handleInputChange}
                        name="age"></input>
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

export default Age