import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderComponent from './components/comum/header/HeaderComponent';
import FooterComponent from './components/comum/footer/FooterComponent';

import HomeComponent from './components/home/HomeComponent';
import CadastroComponent from './components/usuario/CadastrarComponent';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/cadastrar" component={CadastroComponent} />
        <Route path="/editar/:id" component={CadastroComponent} />
      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;
