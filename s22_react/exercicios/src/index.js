import React from 'react'
import ReactDom from 'react-dom'

import BomDia from './componentes/BomDia'
// const elemento = <h1>React 2</h1>
ReactDom.render(<BomDia nome="Juan" idade={18}/>, document.getElementById('root'))

// $('<h1>').html('React 2')
