import { Helmet } from 'react-helmet';
import Projects from '../components/Projects.jsx';

export const PortfolioPage = () => {
    return (
        <>        
        <Helmet>
            <title>Adrian Rozsahegyi | Portfolio </title>
        </Helmet>
        <main>
            <section className='intro-text'>
                <h1>Portfolio</h1>
                <h4>My github repositories</h4>
            </section>
            <section className='cards-container'>
                <Projects />
            </section>
        </main>
        </>
    )
}