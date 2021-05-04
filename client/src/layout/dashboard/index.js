import React, { Component } from 'react'
import MenuDrawer from '../../components/common/MenuDrawer'
import Rodape from '../../components/common/Rodape'
import '../../assets/css/classic.css';


export class index extends Component {
    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar" className="sidebar">
                    <div className="sidebar-content ">
                        <a className="sidebar-brand" href="index.html">
                            <i className="align-middle" data-feather="box" />
                            <span className="align-middle">Adbit</span>
                        </a>
                        <MenuDrawer />
                    </div>
                </nav>

                <div className="main">
                    <nav className="navbar navbar-expand navbar-light bg-white">

                    </nav>
                    <main className="content">
                        {this.props.children}
                    </main>
                    
                    <Rodape/>
                </div>
            </div>

        )
    }
}

export default index
