import React from "react";

export default props => 
    [
        <h1>Bom dia {props.nome}!</h1>,
        <h2>Você tem {props.idade} anos!</h2>
    ]

// export default  props => 
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h1>Você tem {props.idade} anos!</h1>
//     </React.Fragment>

// export default  props => 
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h1>Você tem {props.idade} anos!</h1>
//     </div>