import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <footer className="footer">
                        <div className="container-fluid">
                            <div className="row text-muted">
                                <div className="col-6 text-left">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="text-muted" href="/index">Suporte</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="text-muted" href="/index">Central de ajuda</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="text-muted" href="/index">Privacidade</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="text-muted" href="/index">Termos de uso</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 text-right">
                                    <p className="mb-0">
                                        © 2021 - <a href="/index" className="text-muted">Adbit</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
        )
    }
}
