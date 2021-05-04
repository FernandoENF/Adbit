import React, { Component } from 'react'

export default class index extends Component {

    render() {
        return (
            <div className="col-lg-6 col-xl-12">
                <div className="card flex-fill w-100">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Encurtar Link</h5>
                    </div>
                    <div className="card-body p-1">
                        <form class="form-inline">
                            <div class="form-group mx-sm-3 mb-2 col-sm-10">
                                <input class="form-control form-control-lg w-100" type="text" placeholder="Cole seu link aqui" />
                            </div>
                            <button type="submit" class="btn btn-primary mb-2">Encurtar</button>
                        </form>
                        <div class="input-group-append mx-sm-3 mb-2 col-sm-10">
                            <span class="input-group-text w-50" id="basic-addon2">link.com/encurtado</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
