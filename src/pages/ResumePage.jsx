import Timeline from "../components/Timeline";
import Resume from "../components/Resume.jsx";
import './resumePage.css';

export const ResumePage = () => {
    return (
        <main>
            <section className="intro-text">
                <h1>Timeline</h1>
                <h4>A timeline over my career</h4>
            </section>
            <Timeline />

        <div className='divider-top'></div>

        <section className="resume-text">
            <h2>Resumé</h2>
        </section>
        <Resume/>
        </main>
    )
}