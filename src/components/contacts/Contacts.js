import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contacts.css'

const Contacts = () => {
    const serviceID = 'service_ID'
    const templateID = 'template_ID'
    const userId = 'J1xCpajP3l9r-Wf_6'

    const form = useRef()

    const sendEmail = e => {
        e.preventDefault()

        emailjs.sendForm(serviceID, templateID, form.current, userId).then(
            result => {
                console.log(result.text)
            },
            error => {
                console.log(error.text)
            }
        )
    }
    return (
        <section className="contacts-wrapper">
            <div className="contacts-heading">Оформить заказ:</div>
            <div className="container">
                <form ref={form} onSubmit={sendEmail}>
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
                                name="phone"
                            />
                            <input
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="Почта:"
                                name="email"
                            />
                            <input
                                id="subject"
                                type="text"
                                className="form-control"
                                placeholder="Объект:"
                                name="subject"
                            />
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <textarea
                                id="description"
                                type="text"
                                placeholder="Проводимые работы:"
                                className="form-control"
                                name="description"
                            ></textarea>
                            <button
                                className="btn-main-offer contact-btn"
                                type="submit"
                            >
                                Оформить заказ
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contacts
