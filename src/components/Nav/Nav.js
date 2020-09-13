import React from 'react'
import logo from '../../assets/Group.svg'
import './nav.scss';

const Nav = () => {
    return (
        <nav classname="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-scrolled" id="mainNav">
            <div classname="container">
                <a classname="navbar-brand js-scroll-trigger" href="#page-top">
                    <img src={logo} alt="" />
                </a>
                <button classname="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span classname="navbar-toggler-icon"></span></button>
                <div classname="collapse navbar-collapse bg-white pl-3 mx-n3" id="navbarResponsive">
                    <ul classname="navbar-nav ml-auto my-2 my-lg-0 align-items-center">
                        <li classname="nav-item">
                            <a classname="nav-link js-scroll-trigger" href="#home">Home</a>
                        </li>
                        <li classname="nav-item">
                            <a classname="nav-link js-scroll-trigger" href="#apply">Apply</a>
                        </li>
                        <li classname="nav-item">
                            <a classname="nav-link js-scroll-trigger" href="#about">About</a>
                        </li>
                        <li classname="nav-item">
                            <a classname="nav-link js-scroll-trigger" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn--outlined px-5 m-2" href="login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn--primary px-5 m-2" href="apply">Apply</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
