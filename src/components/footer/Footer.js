import React from 'react'
import { Link } from 'react-scroll'
import { SocialIcon } from 'react-social-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 footer-contacts">
                        <div className="d-flex">
                            <a href="tel:89671189252">8(967)118-92-52</a>
                        </div>
                        <div className="d-flex">
                            <a href="mailto:vav_remont@mail.ru">
                                vav_remont@mail.ru
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 footer-navigation">
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
                            offset={-100}
                            className="footer-nav"
                            href="#"
                        >
                            О нас
                        </Link>
                        <br />
                        <Link
                            smooth={true}
                            to="services"
                            className="footer-nav"
                            href="#"
                        >
                            Услуги
                        </Link>
                        <br />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-12 footer-navigation">
                        <Link
                            smooth={true}
                            to="works"
                            offset={-100}
                            className="footer-nav"
                            href="#"
                        >
                            Наши работы
                        </Link>
                        <br />
                        <Link
                            smooth={true}
                            to="remount"
                            offset={-110}
                            className="footer-nav"
                            href="#"
                        >
                            Ремонт
                        </Link>
                        <br />
                        <Link
                            smooth={true}
                            to="contacts"
                            offset={-110}
                            className="footer-nav"
                            href="#"
                        >
                            Контакты
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-3 socials">
                        <div className="d-flex justify-content-center">
                            <SocialIcon
                                network="vk"
                                url="https://vk.com"
                                bgColor="#ffffff"
                                fgColor="#000000"
                                style={{
                                    height: 30,
                                    width: 30,
                                    marginRight: '2rem',
                                }}
                            />
                            <SocialIcon
                                network="telegram"
                                url="https://tgclick.com/Vav_remont"
                                bgColor="#ffffff"
                                fgColor="#000000"
                                style={{
                                    height: 30,
                                    width: 30,
                                    marginRight: '2rem',
                                }}
                            />
                            <SocialIcon
                                network="youtube"
                                url="https://youtube.com"
                                bgColor="#ffffff"
                                fgColor="#000000"
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
