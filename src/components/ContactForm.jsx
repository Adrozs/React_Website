import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.css';

export default function ContactForm() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_61j5n1a', 
            'template_okfb57c', 
            form.current, {
                publicKey: 'kjYjWj1iS9tJZ1Rja',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        };

    return (
        <>
            <section>
                <div className='contact-container'>
                    <img src="https://t4.ftcdn.net/jpg/02/36/62/99/360_F_236629968_cvZT3xpLsf26tuvcJOLaU8xIR1GfPrus.jpg" alt="" />
                    <div className='info-section'>
                        <h2 className='text-color'>Let's get in touch!</h2>
                        <p className='header-text text-color'>Want to discuss a project or just reach ut for a chat? Don't hesitate to contact me.</p>
                        <ul>
                            <li>
                                <div className="info-leftz">
                                    <i className="fas fa-mobile-alt text-color"></i>
                                </div>
                                <div className="info-rightz">
                                    <h4 className='text-color'>+46 12 345 67 89</h4>
                                </div>
                            </li>
                            <li>
                                <div className="info-leftz">
                                    <i className="fas fa-at text-color"></i>
                                </div>
                                <div className="info-rightz">
                                    <h4 className='text-color'>adrian@roz.nu</h4>
                                </div>
                            </li>
                            <li>
                                <div className="info-leftz">
                                    <i className="fas fa-map-marker-alt text-color"></i>
                                </div>
                                <div className="info-rightz">
                                    <h4 className='text-color'>Stockholm, Sweden</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='form-section'>
                        <form action="">
                            <input type="text" name="user_name" placeholder="Name *" required="required" />
                            <input type="email" name="user_email" placeholder="Email *" required="required" />
                            <textarea rows="4" name="message" placeholder="Message *" required="required"></textarea>
                            <input type="submit" value="Send" className='form-btn' />
                        </form>
                    </div>
                    
                </div>
                
            </section>
        </>
    )
}