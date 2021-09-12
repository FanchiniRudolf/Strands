import React from 'react';
import ReactDOM from 'react-dom';
//import { ContadorConCustomHook } from './hooks/state/ContadorConCustomHook';
import { Formulario } from './hooks/state/effect/Formulario';
//import { Contador } from './hooks/state/Contador';
//import { Formulario } from './hooks/state/effect/Formulario';
//import { Mensaje } from './hooks/state/effect/Mensaje';
//import { Hooks } from './Hooks';

ReactDOM.render( 
  <Formulario/>,
  document.getElementById('root')
  );