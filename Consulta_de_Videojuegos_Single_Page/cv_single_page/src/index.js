import React from 'react';
import ReactDOM from 'react-dom';
import { MainAppRouter } from './componentes/routers/MainAppRouter';
import { ConsultaVideojugosSinglePageApp } from './ConsultaVideojuegosSinglePageApp';
import { MainApp } from './hooks/context/MainApp';

ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
);


