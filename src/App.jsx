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


export default props => (
    <div className="App">

        <Card titulo="#01 - Primeiro componente">
            <Primeiro/>
        </Card>

        <Card titulo="#02 - Componente com parametro">
            <ComParamentros titulo="Esse é o titulo" subtitulo='Esse é o subtitulo'/>
            <ComParamentros titulo="Outro" subtitulo='texto'/>
        </Card>

        <Card titulo="#03 - Componentem Com Filhos">
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

        <Card titulo="#04 - Repetição">
            <Repeticao/>
        </Card>

        <Card titulo="#05 - Condicional">
            <Condicional numero={1}></Condicional>
        </Card>

        <Card titulo="#05 - Condicional Com If">
            <CondicionalComIf numero={2}></CondicionalComIf>
        </Card>


    </div>
);
