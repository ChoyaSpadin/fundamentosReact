import React from "react";
import './App.css'
import Card from "./components/layout/Card";
import './index.css'

import Primeiro from "./components/basicos/Primeiro";
import ComParamentros from "./components/basicos/ComParamentros";
import ComFilhos from "./components/basicos/ComFilhos";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import {Contador} from "./components/basicos/TestUseEffect";
import Pai from "./components/comunicacao/ direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input"
import TestContador from "./components/contador/Contador";

export default props => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#01 - Primeiro componente" color="#FA6900">
                <Primeiro/>
            </Card>

            <Card titulo="#02 - Componente com parametro" color="#E94C6F">
                <ComParamentros titulo="Esse é o titulo" subtitulo='Esse é o subtitulo'/>
                <ComParamentros titulo="Outro" subtitulo='texto'/>
            </Card>

            <Card titulo="#03 - Componentem Com Filhos" color="#EB984E">
                <ComFilhos>
                    <ul>
                        <li>
                            Dembe
                        </li>
                        <li>
                            Shiva
                        </li>
                        <li>
                            Chico
                        </li>
                        <li>
                            isis
                        </li>
                        <li>
                            Stewie
                        </li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#04 - Repetição" color="#17202A">
                <Repeticao/>
            </Card>

            <Card titulo="#05 - Condicional" color="#7D3C98">
                <Condicional numero={1}></Condicional>
            </Card>

            <Card titulo="#06 - Condicional Com If" color="#273746 ">
                <CondicionalComIf numero={2}></CondicionalComIf>
            </Card>

            <Card titulo="#07 Use Effect" color="#273746 ">
                <Contador></Contador>
            </Card>

            <Card titulo="#08 Comunicação direta" color="#273746 ">
                <Pai sobrenome="Freitas"></Pai>
            </Card>

            <Card titulo="#09 Comunicação indireta" color="#273746 ">
                <Super></Super>
            </Card>

            <Card titulo="#10 Input" color="#275746 ">
                <Input></Input>
            </Card>

            <Card titulo="#11 Contador" color="#285746 ">
                <TestContador passo={10} valor={100}></TestContador>
            </Card>

        </div>




    </div>
);
