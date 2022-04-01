import React from 'react'
import Typed from 'react-typed'
import './Header.css'

const Header = () => {
    return (
        <section className="header-wrapper">
            <div className="main-info">
                <h1>Ремонт квартир в Москве любой сложности</h1>
                <Typed
                    className="typed-text"
                    strings={[
                        'Ремонт квартир в Москве и МО',
                        'Демонтаж и монтаж',
                        'Электрика и сантехника',
                        'Установка дверей и окон',
                    ]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                />
                <button className="btn-main-offer">Заказть ремонт</button>
            </div>
        </section>
    )
}

export default Header
