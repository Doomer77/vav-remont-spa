import React from 'react'
import Typed from 'react-typed'
import './Header.css'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Ремонт любой сложности</h1>
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
        </div>
    )
}

export default Header
