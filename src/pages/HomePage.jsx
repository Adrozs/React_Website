import TechItem from '../components/TechItem.jsx';
import './homePage.css'

export const HomePage = () => {
    return (
        <>
            <main>                
                <section className='hero content-width'>
                    <h1>Adrian Rozsahegyi <br/> <span>.NET Developer</span> </h1>
                    <img src="src\assets\adrian1.png" className='introduction-img' alt="Adrian" />
                    <ul className='link-container'>
                        <a href="https://github.com/Adrozs" target="_blank" className="social-link"><i
                            className="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.linkedin.com/in/adrozs/" target="_blank" className="social-link"><i
                            className="fa-brands fa-github"></i></a>
                        <a href="mailto:adrozsahegyi@gmail.com" target="_blank" className="social-link"><i
                            className="fa-solid fa-envelope"></i></a>
                    </ul>
                </section>
                    
                {/* About section - linking to about page */}
                {/* remove DIV later, only using to test width */}
                <div className='content-width'> 
                <section className='about-me'>
                    <h2>Adrian is...</h2>
                        <p> ...a Fullstack.NET developer coming from a succesful career in retail. <br /> To the innovative world of web development. 
                            <br /><br />
                            With a knack for problem-solving and a passion for technology, <br />I'm on a mission to create impactful digital solutions.
                        </p>
                    
                    <button className='my-btn'>Learn more</button>
                </section>
                <section>
                        <section className='experience '>
                            <h2>Technologies</h2>
                            <p>Explore my knowledge stack</p>
                    </section>
                    
                    {/* Here components highlighting technologies im good with c#, .net, html css js, react, bootstrap etc etc */}
                    <TechItem/>
                </section>
                </div>

                {/* Portfolio section - linking to Portfolio page */}


                {/* Expereience section - linking to resumé page */}
            </main>                  
        </>
    )
}