import React, { Component } from 'react'
import Layout from '../../../layout/dashboard'

export default class index extends Component {
    render() {
        return (
            <Layout>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Meus Links</h5>
                            <h6 className="card-subtitle text-muted">Veja o desempenho geral de todos os seus lins encurtados</h6>
                        </div>
                        <div className="card-body">
                            <table id="datatables-basic" className="table table-striped" style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Link</th>
                                        <th>Cliques</th>
                                        <th>Receita</th>
                                        <th>Criado dia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td>link.com/encurtado</td>
                                        <td>12.343</td>
                                        <td>R$ 61</td>
                                        <td>02/04/2021</td>
                                    </tr>
                                    <tr>
                                        <td>02</td>
                                        <td>link.com/encurtado</td>
                                        <td>2.771</td>
                                        <td>R$ 12</td>
                                        <td>04/04/2021</td>
                                    </tr>
                                    <tr>
                                        <td>03</td>
                                        <td>link.com/encurtado</td>
                                        <td>76.987</td>
                                        <td>R$ 523</td>
                                        <td>23/01/2021</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </Layout>
        )
    }
}
