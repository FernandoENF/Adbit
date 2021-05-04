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
                                    <h1 className="h2">Esqueci a senha</h1>
                                    <p className="lead">
                                        Coloque seu email para resetar sua senha
            </p>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="m-sm-4">
                                            <form>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input className="form-control form-control-lg" type="email" name="email" placeholder="Coloque seu email" />
                                                </div>
                                                <div className="text-center mt-3">
                                                    <a href="/sign-in" className="btn btn-lg btn-primary">Recuperar senha</a>
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
