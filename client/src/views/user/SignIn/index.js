import React, { Component, useState, useContext } from 'react'
import Axios from 'axios'

Axios.defaults.withCredentials = true;


export default class index extends Component {

    login = () => {
        Axios.post('http://localhost:8081/api/login', {
            email: this.state.email,
            password: this.state.password,
        }).then((response) => {
            console.log(response);
            if(response.data.auth) {
                localStorage.setItem("token", response.data.token)

            }
        });
    }

    userAuth = () => {
        Axios.get('http://localhost:8081/api/isUserAuth', {
            headers: {
                "adbit-acess-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            console.log(response)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    constructor(props) {
        super(props)

        this.state = {
            email: '',
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
                                <div className="card">
                                    <div className="card-body">
                                        <div className="m-sm-4">
                                            <form onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input className="form-control form-control-lg" type="email" name="email" placeholder="Coloque seu email"
                                                     onChange={e => this.setState({email: e.target.value})} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Senha</label>
                                                    <input className="form-control form-control-lg" type="password" name="password" placeholder="Coloque sua senha"
                                                     onChange={e => this.setState({password: e.target.value})} />
                                                    <small>
                                                        <a href="/resetar-senha">Esqueci minha senha</a>
                                                    </small>
                                                </div>
                                                <div>
                                                    <div className="custom-control custom-checkbox align-items-center">
                                                        <input type="checkbox" className="custom-control-input" defaultValue="remember-me" name="remember-me" defaultChecked />
                                                        <label className="custom-control-label text-small">Manter conectado</label>
                                                    </div>
                                                </div>
                                                <div className="text-center mt-3">
                                                    <button className="btn btn-lg btn-primary" onClick={this.login}>Entrar</button>
                                                </div>
                                                <div className="text-center mt-3">
                                                    <a href="/sign-up" className="btn btn-sm btn-primary">Criar conta</a>
                                                </div>
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

