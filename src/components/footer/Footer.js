import React from 'react'
import { Link } from 'react-scroll'
import { SocialIcon } from 'react-social-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 clo-sm-6">
                        <div className="d-flex">
                            <a href="tel:89267360018">8-926-736-00-18</a>
                        </div>
                        <div className="d-flex">
                            <a href="mailto:podgorniy.sergei@yandex.ru">
                                podgorniy.sergei@yandex.ru
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link
                                    smooth={true}
                                    to="home"
                                    offset={-110}
                                    className="footer-nav"
                                    href="#"
                                >
                                    Главная
                                </Link>
                                <br />
                                <Link
                                    smooth={true}
                                    to="about"
                                    offset={-110}
                                    className="footer-nav"
                                    href="#"
                                >
                                    Обо мне
                                </Link>
                                <br />
                                <Link
                                    smooth={true}
                                    to="certificates"
                                    offset={-110}
                                    className="footer-nav"
                                    href="#"
                                >
                                    Сертификаты
                                </Link>
                                <br />
                            </div>
                            <div className="col">
                                <Link
                                    smooth={true}
                                    to="expirience"
                                    offset={-110}
                                    className="footer-nav"
                                    href="#"
                                >
                                    Навыки
                                </Link>
                                <br />
                                <Link
                                    smooth={true}
                                    to="portfolio"
                                    offset={-110}
                                    className="footer-nav"
                                    href="#"
                                >
                                    Портфолио
                                </Link>
                                <br />
                                <Link
                                    smooth={true}
                                    to="contacts"
                                    offset={-110}
                                    className="footer-nav"
                                    href="#"
                                >
                                    Котакты
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <SocialIcon
                                network="vk"
                                url="https://vk.com/podgorich"
                                bgColor="#ffffff"
                                style={{
                                    height: 30,
                                    width: 30,
                                    marginRight: '2rem',
                                }}
                            />
                            <SocialIcon
                                network="telegram"
                                url="https://vk.com/podgorich"
                                bgColor="#ffffff"
                                style={{
                                    height: 30,
                                    width: 30,
                                    marginRight: '2rem',
                                }}
                            />
                            <SocialIcon
                                network="youtube"
                                url="https://vk.com/podgorich"
                                bgColor="#ffffff"
                                style={{ height: 30, width: 30 }}
                            />
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Vav_Remont | All
                            Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
