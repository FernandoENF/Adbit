import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <main className="main d-flex w-100">
                <div className="container d-flex flex-column">
                    <div className="row h-100">
                        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                            <div className="d-table-cell align-middle">
                                <div className="text-center">
                                    <h1 className="display-1 font-weight-bold">404</h1>
                                    <p className="h1">Pagina não encontrada</p>
                                    <p className="h2 font-weight-normal mt-3 mb-4">Essa página pode ter sido removida.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        )
    }
}
