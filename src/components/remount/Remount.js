import React from 'react'
import './Remount.css'

const Remount = () => {
    return (
        <section className="remount-wrapper" id="remount">
            <div className="container">
                <div className="features-heading">О ремонте:</div>
                <div className="row">
                    <div className="about-remount">
                        <h3 className="remount-list-heading">
                            Как мы выполняем ремонт:
                        </h3>
                        <ul className="remount-list">
                            <li className="remount-list-item">
                                Выезд на место для замера и консультации
                            </li>
                            <li className="remount-list-item">
                                Составление списка материалов и подсчет сметы
                            </li>
                            <li className="remount-list-item">
                                Составление договора
                            </li>
                            <li className="remount-list-item">Предоплата</li>
                            <li className="remount-list-item">
                                Проведение ремонта согласно договора
                            </li>
                            <li className="remount-list-item">
                                Прием объекта заказчиком и полный расчет
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="about-remount">
                        <h3 className="remount-list-heading">
                            Планирование работ:
                        </h3>
                        <ul className="remount-list">
                            <li className="remount-list-item">
                                Полный осмотр и замер помещения
                            </li>
                            <li className="remount-list-item">
                                Согласование дизайн-проекта (при наличии)
                                будущего интерьера
                            </li>
                            <li className="remount-list-item">
                                Составление сметы
                            </li>
                            <li className="remount-list-item">
                                Подбор и закупка нужных материалов
                            </li>
                            <li className="remount-list-item">
                                Установка дверей и окон
                            </li>
                            <li className="remount-list-item">
                                Электропроводка, столярка, сантехника, отопление
                            </li>
                            <li className="remount-list-item">
                                Заливка и выравнивание полов
                            </li>
                            <li className="remount-list-item">
                                Установка гипсокартона и натягивание потолков
                                (если предусмотрено)
                            </li>
                            <li className="remount-list-item">
                                Поклейка обоев и покраска
                            </li>
                            <li className="remount-list-item">
                                Обязательная генеральная уборка после ремонта
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Remount
