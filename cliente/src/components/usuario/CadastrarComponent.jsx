import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SweetAlert from 'sweetalert2-react';
import { connect } from 'react-redux';
import InputMask from 'react-input-mask';
import { saveUsers, findUserById, updateUsers} from '../../actions';

class CadastrarComponent extends Component {
  constructor(props) {
    super(props)

    this.state = { id: '', name: '', username:'', email: '', phone: '', avatar: '', SweetAlert: false }
  }

  componentWillMount() {
    const userId = +this.props.match.params.id;
    if(userId) {
      this.props.findUserById(userId);
      setTimeout(() => {
        this.setState({
          id: this.props.users.id,
          name: this.props.users.name,
          username: this.props.users.username,
          email: this.props.users.email,
          phone: this.props.users.phone,
          avatar: this.props.users.avatar
        })
      }, 200);
    }
  }

  validate = () => {
    if(!this.state.name || !this.state.username || !this.state.email || !this.state.phone || !this.state.avatar) {
      this.setState({SweetAlert: true});
      return false;
    }

    return true;
  }

  changeValues = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitUser = e => {
    e.preventDefault()
    const isValid = this.validate()

    if(isValid) {
      this.props.saveUsers(this.state)
    }
  }

  updateUser = e => {
    e.preventDefault()
    const isValid = this.validate()

    if(isValid) {
      this.props.updateUsers(this.state.id, this.state)
    }
  }

  render() {
    const { name, username, email, phone, avatar } = this.state;

    return (
      <section>
        <SweetAlert
          show={this.state.SweetAlert}
          title="Ops!"
          type= "error"
          text="Favor preencher todos campos."
          onConfirm={() => this.setState({ SweetAlert: false })}
        />

        <div className="container">
          <div className="row" id="breadcrumb">
            <div className="col-sm-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb btn-sm">
                  <Link className="breadcrumb-item" to="/">Home</Link>
                  <li className="breadcrumb-item active" aria-current="page">{this.state.id ? "Editar" : "Cadastrar"}</li>
                </ol>
              </nav>
            </div>
          </div>
          <form onSubmit={this.state.id ? this.updateUser : this.submitUser}>
            <fieldset>
              <legend>{this.state.id ? "Editar" : "Cadastrar"}</legend>
              <div className="row mt-1">
                <div className="col-md-5 col-sm-4">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user-circle"></i></span>
                    </div>
                    <input type="text" className="form-control" name="name" id="name" value={name} onChange={this.changeValues} placeholder="Nome" />
                  </div>
                </div>
                <div className="col-sm-4 col-sm-4">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="text" className="form-control" name="username" id="username" value={username} onChange={this.changeValues}  placeholder="Usuário" />
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-phone-alt"></i></span>
                    </div>
                    <InputMask mask="(99) 9999-9999" maskChar={null} className="form-control" name="phone" id="phone" value={phone} onChange={this.changeValues} placeholder="Telefone" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                    </div>
                    <input type="text" className="form-control" name="email" id="email" value={email} onChange={this.changeValues} placeholder="E-mail" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-image"></i></span>
                    </div>
                    <input type="text" className="form-control" name="avatar" id="avatar" value={avatar} onChange={this.changeValues} placeholder="URL da Imagem (perfil)" />
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="row">
              <div className="col-sm-6">
                <Link className="btn btn-info btn-sm" to="/"><i className="fas fa-hand-point-left"></i> Voltar</Link>
              </div>
              <div className="col-sm-6 text-right">
                <button type="submit" className="btn btn-success btn-sm"><i className="fas fa-save"></i> Salvar</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  };
};

function ByIdStateToProps(state) {
  return {
    users: state.user.users
  }
}

export default connect(ByIdStateToProps, { saveUsers, findUserById, updateUsers }) (CadastrarComponent);
