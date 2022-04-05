import React from 'react'
import { Link } from 'react-scroll'
import Logo from '../../images/logo.svg'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <img
                        className="logo"
                        src={Logo}
                        alt="vav-remont - ремонт квартир в Москве и МО"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Переключатель навигации"
                >
                    <FontAwesomeIcon
                        icon={faBars}
                        style={{ color: '#fc982c' }}
                    />
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link
                                smooth={true}
                                to="home"
                                offset={-110}
                                className="nav-link"
                                href="#"
                            >
                                Главная
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                smooth={true}
                                to="about"
                                className="nav-link"
                                href="#"
                            >
                                О нас
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                smooth={true}
                                to="services"
                                offset={-100}
                                className="nav-link"
                                href="#"
                            >
                                Услуги
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                smooth={true}
                                to="works"
                                offset={-100}
                                className="nav-link"
                                href="#"
                            >
                                Наши работы
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                smooth={true}
                                to="remount"
                                className="nav-link"
                                href="#"
                            >
                                Ремонт
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                smooth={true}
                                to="contacts"
                                className="nav-link"
                                href="#"
                            >
                                Контакты
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="tel:89671189252">
                                8(967)118-92-52
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
