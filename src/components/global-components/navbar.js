import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <header className="site-header-one go-top">
                <nav className="main-nav__one stricky">
                    <div className="container-fluid">
                        <div className="main-nav__logo-box">
                            <Link to="/">
                                <img src={process.env.PUBLIC_URL + "/assets/images/Logo_bco@8x.png"} alt="logo" className="logo" />
                            </Link>
                            <a href="#" className="side-menu__toggler"><i className="fa fa-bars" /></a>
                        </div>
                        <div className="main-nav__main-navigation">
                            <ul className="main-nav__navigation-box">
                                <li><Link to="/#">Inicio</Link></li>
                                <li><Link to="/service">Servicios</Link></li>
                                <li><a href="https://consultoriavanren.com/blog/author/admin/">Blog</a></li>
                                <li><Link to="/contact">Contacto</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;
