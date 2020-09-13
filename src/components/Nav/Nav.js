import React from 'react'
import logo from '../../assets/Group.svg'
import './nav.scss';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-scrolled" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">
                    <img src={logo} alt="" />
                </a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse bg-white pl-3 mx-n3" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto my-2 my-lg-0 align-items-center">
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#apply">Apply</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
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
