import Projects from '../components/Projects.jsx';

export const PortfolioPage = () => {
    return (
        <main>
            {/* Featured projects */}



            <section className='intro-text'>
                <h1>Github Projects</h1>
            </section>
            <section className='cards-container'>
                <Projects />
            </section>
        </main>
    )
}