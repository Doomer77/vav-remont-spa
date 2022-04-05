import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import './Contacts.css'

const Contacts = () => {
    const form = useRef()
    const [successMessage, setSuccessMessage] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const serviceID = 'service_ID'
    const templateID = 'template_ID'
    const userID = 'J1xCpajP3l9r-Wf_6'

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description,
            },
            userID
        )
        r.target.reset()
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs
            .send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage(
                    'Спасибо за оформления заказа, мы обязательно с Вами свяжемся'
                )
            })
            .catch(err => console.error(`Something went wrong ${err}`))
    }

    return (
        <section id="contacts" className="contacts-wrapper">
            <div className="contacts-heading">Оформить заказ:</div>
            <div className="container">
                <span className="success-message">{successMessage}</span>

                <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <input
                                id="name"
                                type="text"
                                className="form-control"
                                placeholder="Ваше имя:"
                                name="name"
                                {...register('name', {
                                    required:
                                        'Пожалуйста, введите корректное имя',
                                    maxLength: {
                                        value: 20,
                                        message:
                                            'Пожалуйста, введите не более 20 символов',
                                    },
                                })}
                            />
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>

                            <input
                                id="phone"
                                type="phone"
                                className="form-control"
                                placeholder="Телефон:"
                                name="phone"
                                {...register('phone', {
                                    required:
                                        'Пожалуйста, введите корректный телефон',
                                })}
                            />
                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>
                            <input
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="Почта:"
                                name="email"
                                {...register('email', {
                                    required:
                                        'Пожалуйста, введите корректную почту',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Не корректная почта',
                                    },
                                })}
                            />
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            <input
                                id="subject"
                                type="text"
                                className="form-control"
                                placeholder="Объект:"
                                name="subject"
                                {...register('subject', {
                                    required: 'Пожалуйста, введите тип объекта',
                                })}
                            />
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <textarea
                                id="description"
                                type="text"
                                placeholder="Проводимые работы:"
                                className="form-control"
                                name="description"
                                {...register('description', {
                                    required:
                                        'Введите предпологаемый перечень работ',
                                })}
                            ></textarea>
                            <span className="error-message">
                                {errors.description &&
                                    errors.description.message}
                            </span>
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
