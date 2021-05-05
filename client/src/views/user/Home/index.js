import React, { Component } from 'react'
import ImgBanner from '../../../assets/img/mulher-com-dinheiro.png'

export default class index extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark navbar-landing">
                    <a className="navbar-brand" href="#">
                        Adbit
                    </a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active d-none d-md-inline-block">
                            <a className="nav-link" href="/">Como funciona</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Perguntas frequentes</a>
                        </li>
                        <li className="nav-item active d-none d-md-inline-block">
                            <a className="nav-link" href="/">Contato</a>
                        </li>
                    </ul>
                    <a href="/sign-in" target="_blank" className="btn btn-primary my-2 my-sm-0 ml-2">Entrar / Registrar</a>
                </nav>
                <section className="landing-intro pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-11 col-lg-9 col-xl-12 mx-auto">
                                <div className="row">
                                    <div className="col-xl-5">
                                        <i title="AppStack" data-feather="box" className="landing-intro-brand" />
                                        <h1 className="text-white my-4">O Adbit é um Encurtador de links que possibilita a monetização  através de anúncios nos links encurtados</h1>
                                        <p className="text-muted lead">Ganhe dinheiro encurtando links com nossa de rede de patrocinadores premium.</p>
                                        <div className="my-4">
                                            <a target="" href="/sign-up" target="_blank" className="btn btn-light btn-lg mr-1">Criar conta grátis</a>
                                            <a href="/"  className="btn btn-outline-light btn-lg">Saber mais</a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 ml-auto d-none d-xl-block">
                                        <div className="landing-intro-img">
                                            <img src={ImgBanner} style={{maxWidth: "50%", height: "auto"}} className="landing-intro-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
