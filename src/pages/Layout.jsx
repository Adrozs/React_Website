import {Outlet, NavLink, Link} from 'react-router-dom';
import './layout.css'

export const Layout = () => {
    return (
        <>
            <div className="nav-color-fade"></div>
            <header className='navbar content-width'>
                <Link to="/" id="logo"> <img src="../src/assets/Personal_Logo.png" alt="Logo"/></Link>
                <nav>
                    <input type="checkbox" id="nav-toggle"></input>
                    <ul className='nav-menu'>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume">Resumé</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" id='hire-me-button'>Get in touch!</NavLink>
                        </li>
                    </ul>
                </nav>
                <span className="material-symbols-outlined" id="theme-toggle">light_mode</span>

                <div className="hamburger-menu">
                    <label htmlFor="nav-toggle">
                        <i className="fa-solid fa-bars"></i>
                    </label>
                </div>
            </header>
            <Outlet/>
            <footer className='content-width'>
                <section className="img-links-container">
                    <div className="img-button-container">
                        <img id="footer-logo" src="../src/assets/Personal_Logo.png" alt="Logo"/>
                        <Link to="/contact" className="my-btn">Contact me</Link>
                    </div>

                    <ul>
                        <a href="https://github.com/Adrozs" target="_blank" className="social-link"><i
                            className="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.linkedin.com/in/adrozs/" target="_blank" className="social-link"><i
                            className="fa-brands fa-github"></i></a>
                        <a href="mailto:adrozsahegyi@gmail.com" target="_blank" className="social-link"><i
                            className="fa-solid fa-envelope"></i></a>
                    </ul>
                </section>

                <p id="copyright-text">© Copyright 2024 Adrian Rozsahegyi. All rights reserved.</p>
            </footer>
        </>
    )
}