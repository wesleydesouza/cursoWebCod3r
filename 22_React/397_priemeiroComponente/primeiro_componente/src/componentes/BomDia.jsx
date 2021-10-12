import React from "react";

export default props => 
    [
        <h1 key="h1">Bom dia {props.nome} sua idade é: {props.idade}!</h1>,
        <h2 key="h2">Até breve!</h2>
    ]

//recomendado
    /*<React.Fragment>
        <h1>Bom dia {props.nome} sua idade é: {props.idade}!</h1>
        <h2>Até breve!</h2>
    </React.Fragment>*/


//gera uma div no html
     /*<div>
        <h1>Bom dia {props.nome} sua idade é: {props.idade}!</h1>
        <h2>Até breve!</h2>
    </div>*/

