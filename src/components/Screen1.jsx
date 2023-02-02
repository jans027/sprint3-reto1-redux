import React, { Component } from "react";
import { DivCard, Enlace1, Section, Textos1 } from "../styles/Styles1";
import { Link } from "react-router-dom";


export default class pagina2 extends Component {


    render() {
        return (
            <Section>
                <DivCard>
                    <img src="https://i.ibb.co/SXsNrvV/Img-Bg.png" alt="Svg" border="0" />
                </DivCard>
                    <Textos1>
                        <h1>Workout</h1>
                        <p>
                            start training with usand build <br />
                            muscle or lose weight
                        </p>
                    </Textos1>
                    <Enlace1><Link to={`/Pagina3`}>Next</Link></Enlace1>
            </Section>
        );
    }
}