import React from 'react'
import dismantling from '../../images/dismantling.svg'
import tiled from '../../images/tiled.svg'
import finishing from '../../images/finishing.svg'
import painting from '../../images/painting.svg'
import plumbing from '../../images/plumbing.svg'
import electric from '../../images/electric.svg'
import doorinst from '../../images/doorinst.svg'
import windowinst from '../../images/windowinst.svg'

import './Features.css'

const Features = () => {
    return (
        <section className="features-wrapper">
            <div className="container">
                <div className="features-heading">Мы выполняем:</div>
                <div className="row d-flex justify-content-around mb">
                    <div className="col-lg-3 col-md-6 col-sm-6 feature">
                        <img
                            src={dismantling}
                            alt="Демонтаж"
                            className="feature-img"
                        />
                        <p className="feature-text">Демонтаж</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 feature">
                        <img
                            src={finishing}
                            alt="Отделка"
                            className="feature-img"
                        />
                        <p className="feature-text">Отделка</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 feature">
                        <img
                            src={painting}
                            alt="Малярные работы"
                            className="feature-img"
                        />
                        <p className="feature-text">Малярные работы</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 feature">
                        <img
                            src={tiled}
                            alt="Плиточные работы"
                            className="feature-img"
                        />
                        <p className="feature-text">Плиточные работы</p>
                    </div>
                </div>

                <div className="row d-flex justify-content-around">
                    <div className="col-lg-3 col-md-6 col-sm-6 feature feature__mod">
                        <img
                            src={plumbing}
                            alt="Сантехнические работы"
                            className="feature-img"
                        />
                        <p className="feature-text">Сантехнические работы</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 feature">
                        <img
                            src={electric}
                            alt="Элетромонтаж"
                            className="feature-img"
                        />
                        <p className="feature-text">Элетромонтаж</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 feature">
                        <img
                            src={doorinst}
                            alt="Установка дверей"
                            className="feature-img"
                        />
                        <p className="feature-text">Установка дверей</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 feature">
                        <img
                            src={windowinst}
                            alt="Установка окон"
                            className="feature-img"
                        />
                        <p className="feature-text">Установка окон</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
