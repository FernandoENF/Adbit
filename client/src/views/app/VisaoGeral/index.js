import React, { Component } from 'react'
import Layout from '../../../layout/dashboard'
import Encurtador from '../../../components/applications/Encurtador'

export default class index extends Component {
    render() {
        return (
            <Layout>
                <div className="container-fluid p-0">
                    <div className="row">
                        <Encurtador/>
                    </div>
                </div>
            </Layout>
        )
    }
}
