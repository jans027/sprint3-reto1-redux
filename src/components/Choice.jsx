import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { DivCard2, DivDatos, Gender, Section } from '../styles/Styles1'




const Choice = () => {


    const navigate = useNavigate();


    const funcionClick= (boton, e) => {
        // console.log(e)
        if(boton === "mars"){
            console.log("soy mars")
        }else{
            console.log("soy venus")
        }
            navigate('/Suscription');
    }

    return (
        <Section>
            <DivDatos>
                <DivCard2>
                    <img src="https://i.ibb.co/nDWVjvS/Logo.png" alt="Logo" border="0" />

                </DivCard2>
                <h4>Choose gender</h4>
                <Gender>
                    <button value="mars" onClick={()=>funcionClick("mars")}>
                        <FontAwesomeIcon icon={faMars} />
                    </button>
                    <span>Male</span>
                    <button value="venus" onClick={()=>funcionClick("venus")}>
                        <FontAwesomeIcon icon={faVenus} />
                    </button>
                    <span>Female</span>
                </Gender>
            </DivDatos>
        </Section>
    )
}

export default Choice