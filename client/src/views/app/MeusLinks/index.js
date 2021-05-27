import Axios from 'axios';
import React, { Component } from 'react'
import LinkItem from '../../../components/applications/LinkList';
import Layout from '../../../layout/dashboard'

export default class index extends Component {
    componentDidMount(){
        const listLinks = () => {
        Axios.get('https://adbit-app.herokuapp.com/api/links',{
            headers: {
                adbitAcessToken: localStorage.getItem('token'),
            }
        }).then((response) => {
            console.log(response);
            this.setState({
                items: response.data
            })
        })}
        listLinks()
    }

    constructor(props) {
        super(props)

        this.state = { items: []};
    }


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
                                    {this.state.items.map((item, index) => (
                                    <LinkItem key={index} id ={index+1} uri={item.uri} data={item.data}></LinkItem>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </Layout>
        )
    }
}
