import ImgCarousel from '../components/ImgCarousel'
import './aboutPage.css'

export const AboutPage = () => {
    return (
        <main>
            <ImgCarousel />
            <section className='intro-text'>
                <h1>About me</h1>
            </section>

            <section className='about-container content-width'>
                {/* <img src="src\assets\adrian1.png" alt="Adrian" /> */}
                <p> I am a 24 year old ambitious and driven person going from a successful career in retail management to Fullstack .NET development.
                    <br /> <br />
                    Driven by a passion for continuous learning and professional growth. With a strong foundation in customer service, problem-solving, and team leadership, coupled with newly acquired skills in web development.
                    <br /> <br />
                    Big fan of ice hockey and Formula 1, enjoys RPG video games and spontanious adventures with friends. Loves animals, especially my cat Zigge.
                </p>
            </section>


        </main>
    )
}