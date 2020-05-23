import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { showUsers, deleteUser } from '../../actions';

class HomeComponent extends Component {
  componentWillMount() {
    this.props.showUsers()
  }

  deleteByID(id) {
    this.props.deleteUser(id)
  }

  renderUsersList() {
    return this.props.users.map((user) => {
      return (
        <tr key={user.id}>
          <td className="text-center mobile"><img src={user.avatar} className="rounded-circle" alt="Imagem de perfil" width="35" height="35"/></td>
          <td>{user.name}</td>
          <td className="mobile">{user.username}</td>
          <td className="mobile">{user.email}</td>
          <td className="mobile">{user.phone}</td>
          <td>
            <div className="col-sm-12">
              <div className="row">
                <Link to={`/editar/${user.id}`} type="button" className="btn btn-dark btn-xs">
                  <i className="fas fa-user-edit"></i> Editar
                </Link>
                &nbsp;
                <button onClick={ () => this.deleteByID(user.id) } type="button" className="btn btn-danger btn-xs">
                  <i className="fas fa-trash-alt"></i> Deletar
                </button>
              </div>
            </div>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="row" id="breadcrumb">
            <div className="col-sm-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb btn-sm">
                  <li className="breadcrumb-item active" aria-current="page">Home - Listagem de Usuários</li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Link type="button" className="btn btn-primary" to="/cadastrar" id="button-create"><i className="fas fa-user-plus"></i> Adicionar</Link>
            </div>
          </div>
          <fieldset>
            <legend>Usuários</legend>
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr className="tr-line">
                  <th className="mobile"></th>
                  <th scope="col">Nome</th>
                  <th className="mobile" scope="col">Usuário</th>
                  <th className="mobile" scope="col">E-mail</th>
                  <th className="mobile" scope="col">Telefone</th>
                  <th className="button-action" scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.renderUsersList()}
              </tbody>
            </table>
          </fieldset>
        </div>
      </section>
    );
  };
};

function mapStateToProps(state) {
  return {
    users: state.user.list
  }
}

export default connect(mapStateToProps, { showUsers, deleteUser }) (HomeComponent);