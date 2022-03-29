import React, { Component } from 'react';
import NavResourceData from '../../staticData/NavResourceData';


function Navigation() {

    const NavItem = (name, href) => (
        <li className="nav-item">
            <a className="nav-link" href={href}>{name}</a>
        </li>
    )

    const dropdownItems = NavResourceData.map(item => (
        <div>
            <li className="nav__Dropdown__item">
                <a href={item.link}>
                    <p className="nav__Dropdown__item__title">{item.title}</p>
                    <p className="nav__Dropdown__item__content">{item.description}</p>
                </a>
            </li>
            <div className="line my-1" />
        </div>
    ))



    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <div className='logo'>
                    <a className="navbar-brand" href="/#"><img className="navbar__logo" src="https://todoist.com/static/favicon.ico" alt="" /> todoist</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {NavItem("Features", "")}
                        {NavItem("Templates", "")}
                        {NavItem("For Teams", "")}

                        <li className="nav-item ">
                            <a className="nav-link" href="/#">Resources  <i className="nav-item__icon fa fa-angle-down"> </i></a>
                            <ul className="nav__Dropdown">
                                {dropdownItems}
                            </ul>
                        </li>

                        {NavItem("Pricing", "")}
                    </ul>
                    <ul className="navbar-nav">
                        {NavItem("Log In", "/users/showLogin")}
                        {NavItem("Sign Up", "")}
                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default Navigation;