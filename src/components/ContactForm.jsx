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
            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}

            {/* <section className="section-bg" data-scroll-index="7">
                <div className="overlay pt-100 pb-100 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="contact-info">

                                    <h2 className="contact-title">Have Any Questions?</h2>
                                    <p>Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example. It can be used in publishing and graphic design. The lorem ipsum text is usually a section of a Latin text by Cicero with words altered, added and removed to make it nonsensical.</p>
                                    <ul className="contact-info">
                                        <li>
                                            <div className="info-left">
                                                <i className="fas fa-mobile-alt"></i>
                                            </div>
                                            <div className="info-right">
                                                <h4>+11223344550</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info-left">
                                                <i className="fas fa-at"></i>
                                            </div>
                                            <div className="info-right">
                                                <h4>info@example.com</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info-left">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="info-right">
                                                <h4>1243 Stree New Chandigarh, INDIA</h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="contact-form">
                                    
                                    <form ref={form} onSubmit={sendEmail} id='contact-form' method='POST'><input type='hidden' name='form-name' value='contactForm' />
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" name="user_name" className="form-control" id="first-name" placeholder="Enter Your Name *" required="required"/> 
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="email" name="user_email" className="form-control" id="email" placeholder="Enter Your Email *" required="required"/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea rows="4" name="message" className="form-control" id="description" placeholder="Enter Your Message *" required="required"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <input type="submit" value="Send" className="form-btn-big form-btn " ></input>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   */}

{/* test form */}
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