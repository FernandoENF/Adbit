import React, { Component } from 'react'
import Axios from 'axios'

export default class index extends Component {
    encurtar = () => {
        Axios.post('https://adbit-app.herokuapp.com/api/links/novoLink', {
            url: this.state.link,
        },
        {
            headers: {
                adbitAcessToken: localStorage.getItem('token'),
            }
        }).then((response) => {
            this.setState({
                encurtado: process.env.REACT_APP_ROOT_PATH+'/'+response.data.message
            })
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    constructor(props) {
        super(props)

        this.state = {
            link: '',
            encurtado: 'link.com/encurtado',
        }
    }


    render() {
        return (
            <div className="col-lg-6 col-xl-12">
                <div className="card flex-fill w-100">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Encurtar Link</h5>
                    </div>
                    <div className="card-body p-1">
                        <form className="form-inline" onSubmit={this.handleSubmit}>
                            <div className="form-group mx-sm-3 mb-2 col-sm-10">
                                <input className="form-control form-control-lg w-100" type="text" placeholder="Cole seu link aqui"
                                 onChange={e => this.setState({link: e.target.value})} />
                            </div>
                            <button type="submit" class="btn btn-primary mb-2" onClick={this.encurtar}>Encurtar</button>
                        </form>
                        <div className="input-group-append mx-sm-3 mb-2 col-sm-10">
                            <span className="input-group-text w-50" id="basic-addon2">{this.state.encurtado}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
