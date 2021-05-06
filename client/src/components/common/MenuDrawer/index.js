import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <ul className="sidebar-nav">
                <Link to="/dashboard" className="sidebar-link">
                    <i className="align-middle" data-feather="sliders" />
                    <span className="align-middle">Visão geral</span>
                </Link>
                <Link to="/meus-links" className="sidebar-link">
                    <i className="align-middle" data-feather="sliders" />
                    <span className="align-middle">Meus Links</span>
                </Link>
            </ul>

        )
    }
}
