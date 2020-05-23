import React from 'react';
import { Link } from "react-router-dom";

const HeaderComponent = () => (
  <header className="App-header">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark border-bottom fixed-top box-shadow">
      <div className="container">
        <Link className="navbar-brand nav-text" to="/">LOGO</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav mr-auto text-center">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="" id="produtos" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-users"></i> Usuários
              </Link>
              <div className="dropdown-menu" aria-labelledby="produtos">
                <Link className="dropdown-item" to="/cadastrar">Adicionar</Link>
              </div>
            </li>
          </ul>
          <div className="my-2 my-lg-0">
            <ul className="navbar-nav mr-auto text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fas fa-sign-out-alt"></i> Sair
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <br /><br /><br />
  </header>
);

export default HeaderComponent;