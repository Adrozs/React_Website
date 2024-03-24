import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HighlightedWork from '../components/HighlightedWork.jsx';
import TechItem from '../components/TechItem.jsx';
import Expereience from '../components/experience.jsx';
import './homePage.css'

export const HomePage = () => {
    return (
        <>
        <Helmet>
            <title>Adrian Rozsahegyi | .NET Developer</title>
        </Helmet>

        <main>                
            <section className='hero content-width'>
                <h1>Adrian Rozsahegyi <br/> <span>.NET Developer</span> </h1>
                    <img src="src\assets\images\Adrian\adrian1.png" className='introduction-img' alt="Adrian" />
                <ul className='link-container'>
                    <a href="https://github.com/Adrozs" target="_blank" className="social-link hoverable "><i
                        className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.linkedin.com/in/adrozs/" target="_blank" className="social-link hoverable "><i
                        className="fa-brands fa-github"></i></a>
                    <a href="mailto:adrozsahegyi@gmail.com" target="_blank" className="social-link hoverable "><i
                        className="fa-solid fa-envelope "></i></a>
                </ul>
                <div className='spacer-bot'></div>
            </section>
                
            {/* About section - linking to about page */}
            <section className='about-me header-space'>
                <h2>Adrian is...</h2>
                    <p> a Fullstack.NET developer coming from a succesful career in retail, to the innovative world of web development. 
                        <br /><br />
                        With a knack for problem-solving and a passion for technology, <br />I'm on a mission to create impactful digital solutions.
                    </p>
                
                <Link to="/about" className="my-btn">Learn more</Link>
                <div className='spacer-bot'></div>
            </section>

            <div className='divider-line spacer-top'></div>

            {/* Portfolio section - linking to Portfolio page */}
            <section className='highlighted-work header-space alt-background'>
                <h2>HIGHLIGHTED WORK</h2>
                <HighlightedWork/>
                <Link to="/portfolio" className="my-btn">View my entire portfolio</Link>
                <div className='spacer-bot'></div>
            </section>

            <div className='divider-line spacer-bot'></div>

            {/* Technologies section */}
            <section>
                <div className='technologies'>
                    <h2>TECHNOLOGIES</h2>
                    <p>Explore my knowledge stack</p>
                </div>
                
                {/* Here components highlighting technologies im good with c#, .net, html css js, react, bootstrap etc etc */}
                <TechItem/>
            </section>
            
            <div className='divider-line spacer-top'></div>


            {/* Expereience section - linking to resumé page */}
            <section className='alt-background header-space'>
                <div className='experience'>
                    <h2>WORK EXPERIENCE</h2>
                </div>
                <Expereience />
            </section>

            <div className='divider-line spacer-bot'></div>

        </main>                  
        </>
    )
}