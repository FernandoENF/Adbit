import React, { Component } from 'react'

export default class index extends Component {
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
                                            <form>
                                                <div className="form-group">
                                                    <label>Nome</label>
                                                    <input className="form-control form-control-lg" type="text" name="name" placeholder="Coloque seu nome" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Site / Rede social</label>
                                                    <input className="form-control form-control-lg" type="text" name="company" placeholder="Coloque de onde vem seu público" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input className="form-control form-control-lg" type="email" name="email" placeholder="Coloque seu email" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Senha</label>
                                                    <input className="form-control form-control-lg" type="password" name="password" placeholder="Coloque sua senha" />
                                                </div>
                                                <div className="text-center mt-3">
                                                    <a href="/" className="btn btn-lg btn-primary">Registrar</a>
                                                    
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
