import React from 'react'
import Logo from '../../logo.svg'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img
                        className="logo"
                        src={Logo}
                        alt="vav-remont - ремонт квартир в Москве и МО"
                    />
                </a>
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
                            <a className="nav-link" href="#">
                                Главная
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                О нас
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Услуги
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Наши работы
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Ремонт
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Контакты
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="tel:8967118-92-52">
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
