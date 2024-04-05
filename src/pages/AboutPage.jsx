import { Helmet } from 'react-helmet';
import ImgCarousel from '../components/ImgCarousel'
import './aboutPage.css'
import ZiggeImg from "src\assets\images\About\Zigge.jpg";
import HockeyImg from "src\assets\images\About\Hockey.jpg";
import GameImg from "src\assets\images\About\Rpg.jpg";


export const AboutPage = () => {
    return (
        <>
        <Helmet>
             <title>Adrian Rozsahegyi | About </title>
        </Helmet>

        <main>
            <section className='intro-text'>
                <h1>About me</h1>
            </section>

            <ImgCarousel />

            <section className='about-container content-width'>
                {/* <img src="src\assets\adrian1.png" alt="Adrian" /> */}
                <p> I am a 24 year old ambitious and driven person going from a successful career in retail management to Fullstack .NET development.
                    <br /> <br />
                    Driven by a passion for learning and growth. I enjoy a challenge and love the feeling of solving a problem. 
                    <br /><br />
                    I have a strong foundation in customer service, problem-solving, and team leadership. Which makes the programmer role fit perfectly for me.
                    <br /> <br />
                    I'm a huge fan of ice hockey, especially my local club. As well as watching Formula 1. Nerdy and a sucker for RPG video games, but also enjoys spontanious adventures with friends and family. 
                    <br /><br />
                    I love animals, especially my cat Zigge.
                </p>
                <div className='interests-container'>
                    <div className='interest'>
                        <img src={ZiggeImg} alt="Picture of Adrians cat Zigge. A black cat with yellow eyes sitting on a bed." />
                        <p>Zigge</p>
                    </div>
                    <div className='interest'>
                        <img src={HockeyImg} alt="Picture of hockey players" />
                        <p>Favorite hockey team</p>
                    </div>
                    <div className='interest'>
                        <img src={GameImg} alt="Picture of heros looking out over a cliff in the game Baldurs Gate 3." />
                        <p>RPG game Baldurs Gate 3</p>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}