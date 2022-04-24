import React from 'react'
import './About.css'
import about1 from '../../images/about-1.png'
import about2 from '../../images/about-2.png'
import about3 from '../../images/about-3.png'

const About = () => {
    return (
        <section id="about" className="about-wrapper">
            <div className="container">
                <div className="about-heading">О нас:</div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="about-text">
                            Vav Remont - это слаженная бригада профессиональных
                            строителей, которая выполняет ремонты квартир под
                            ключ в Москве и Московской области по разумным
                            ценам. Мы возьмем проблемы на себя, выполним работу
                            в срок и на должном уровне, будь то квартира, офис
                            или частный дом. Наши специалисты имеют большой опыт
                            в проведение ремонтных работ. Мы найдем подход к
                            каждому нашему клиенты.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="about-item">
                            <img
                                className="about-item-image"
                                src={about1}
                                alt="Качественный, ремонт квартир по доступным ценам"
                            />
                            <h3 className="about-item-heading">
                                Ремонт квартир под ключ:
                            </h3>
                            <p className="about-item-text">
                                Качественный, ремонт квартир по доступным ценам
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="about-item">
                            <img
                                className="about-item-image"
                                src={about2}
                                alt="Ремонт частных домов и котеджей"
                            />
                            <h3 className="about-item-heading">
                                Ремонт частных домов и котеджей:
                            </h3>
                            <p className="about-item-text">
                                Внутрення и внешняя отделка домов и котеджей
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="about-item">
                            <img
                                className="about-item-image"
                                src={about3}
                                alt="Мы выполняем ремонт со всеми требованиями и
                                нормами, чтобы Ваша жизнь была уютой."
                            />
                            <h3 className="about-item-heading">
                                Мы соблюдаем все требования:
                            </h3>
                            <p className="about-item-text">
                                Мы выполняем ремонт со всеми требованиями и
                                нормами, чтобы Ваша жизнь была уютой.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
