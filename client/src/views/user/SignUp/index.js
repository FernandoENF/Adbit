import React, { Component } from 'react';
import Axios from 'axios'
import { withRouter } from 'react-router-dom';


class signUp extends Component {
    signUp = () => {
        Axios.post('https://adbit-app.herokuapp.com/api/register', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            company: this.state.company
        }).then((response) => {
            alert(response.data.message)
            this.props.history.push("/sign-in");
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            company: '',
            password: '',
        }
    }
    render() {
        return (
            <main className="main d-flex w-100">
                <div className="container d-flex flex-column">
                    <div className="row h-100">
                        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                            <div className="d-table-cell align-middle">
                                <div className="text-center mt-4">
                                    <h1 className="h2">Crie sua conta</h1>
                                    <p className="lead">
                                        Ganhe dinheiro encurtando links!
            </p>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="m-sm-4">
                                            <form onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <label>Nome</label>
                                                    <input className="form-control form-control-lg" type="text" name="name" placeholder="Coloque seu nome"
                                                     onChange={e => this.setState({name: e.target.value})} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Site / Rede social</label>
                                                    <input className="form-control form-control-lg" type="text" name="company" placeholder="Coloque de onde vem seu público"
                                                     onChange={e => this.setState({company: e.target.value})} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input className="form-control form-control-lg" type="email" name="email" placeholder="Coloque seu email"
                                                     onChange={e => this.setState({email: e.target.value})} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Senha</label>
                                                    <input className="form-control form-control-lg" type="password" name="password" placeholder="Coloque sua senha"
                                                     onChange={e => this.setState({password: e.target.value})} />
                                                </div>
                                                <div className="text-center mt-3">
                                                    <button className="btn btn-lg btn-primary" onClick={this.signUp} >Registrar</button>
                                                    
                                                </div>
                                                <small>
                                                        <a href="/sign-in">Quero fazer login</a>
                                                    </small>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        )
    }
}

export default withRouter(signUp);