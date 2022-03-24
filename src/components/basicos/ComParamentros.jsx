import React from 'react'
// props é somente leitura

export default props =>
    <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
        {/*<p>{Array(10).fill(0)}</p>*/}
    </>

