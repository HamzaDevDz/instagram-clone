import React, {useState} from "react";
import './contact.css'
import {Slide} from "react-reveal";

export const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitMessage = () => {
        if(name === '' || email === '' || message === ''){
            if(name === ''){
                const nameField = document.querySelector('.contact__form__name')
                nameField.classList.add('alert')
                setTimeout(()=>{
                    nameField.classList.remove('alert')
                }, 2000)
            }
            if(email === ''){
                const emailField = document.querySelector('.contact__form__email')
                emailField.classList.add('alert')
                setTimeout(()=>{
                    emailField.classList.remove('alert')
                }, 2000)
            }
            if(message === ''){
                const messageField = document.querySelector('.contact__form__message')
                messageField.classList.add('alert')
                setTimeout(()=>{
                    messageField.classList.remove('alert')
                }, 2000)
            }
        }
        else{
            alert('Submited !')
            setName('')
            setEmail('')
            setMessage('')
        }
    }

    return(
        <div id={'contact'} className={'contact'}>
            <div className={'contact__title'}>
                CONTACT
                <span className={'contact__title__line'}></span>
            </div>
            <p className={'contact__question'}>
                Have a question or want to work together?
            </p>
            <form className={'contact__form'}>
                <Slide bottom delay={300}>
                    <div className={'contact__form__textField contact__form__name'}>
                        <input required className={'input'} value={name} onChange={e=>setName(e.target.value)} />
                        <span className={'placeholder'}>Name</span>
                    </div>
                    <div className={'contact__form__textField contact__form__email'}>
                        <input required className={'input'} value={email} onChange={e=>setEmail(e.target.value)} />
                        <span className={'placeholder'}>Email</span>
                    </div>
                    <div className={'contact__form__textField contact__form__message'}>
                        <textarea required className={'input'} value={message} onChange={e=>setMessage(e.target.value)} />
                        <span className={'placeholder'}>Your message</span>
                    </div>
                    <button className={'contact__form__btnSubmit'} type={'submit'} onClick={handleSubmitMessage}>Submit</button>
                </Slide>

            </form>
        </div>
    )
}