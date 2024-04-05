import {Link} from 'react-router-dom';
import AdrianDiploma from ".\src\assets\images\Work\leadership_diploma_cropped.jpg";
import './experience.css';

export default function Expereience() {

    return (
        <>
        <section className='experience-container'>
                <div className='experience-content'>
                    <img src={AdrianDiploma} alt="Adrian holding diploma" className='shadow'/>
                <p>I have been working in the world of retail telecom since 2018. I began my journey at Elgiganten fresh out of High School as a sales person quickly taking on more responsibilities and becoming acting storemanager in Luleå.
                    <br /><br />
                    Moving back home to Stockholm in a new team continuing my focus on the stores goals and a positive work enviroment. There I also became acting stormananger and later storemanager which I've been for the past 3 years.
                    <br /><br />
                    Until now when I felt the need for a new challenge in the world of IT and webdevelopment.
                </p>
            </div>
            <Link to="/resume" className="my-btn">View my Resumé</Link>
        </section>

        </>
    )
}