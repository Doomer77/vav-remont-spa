import React from 'react'
import './Contacts.css'

const Contacts = () => {
    return (
        <section className="contacts-wrapper">
            <div className="contacts-heading">Оформить заказ:</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <input
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Ваше имя:"
                            name="name"
                        />
                        <input
                            id="phone"
                            type="phone"
                            className="form-control"
                            placeholder="Телефон:"
                            phone="phone"
                        />
                        <input
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Почта:"
                            email="email"
                        />
                        <input
                            id="subject"
                            type="text"
                            className="form-control"
                            placeholder="Объект:"
                            subject="subject"
                        />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <textarea
                            id="description"
                            type="text"
                            placeholder="Проводимые работы:"
                            className="form-control"
                            description="description"
                        ></textarea>
                        <button
                            className="btn-main-offer contact-btn"
                            type="submit"
                        >
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
