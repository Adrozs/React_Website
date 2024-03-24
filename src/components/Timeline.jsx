import MyTimeline from '../assets/Json/timeline.json';
import './timeline.css';

export default function Timeline() {

    return (
        <section className="content-width" >
            <section className="row">
                <div className="col-md-12">
                    <div className="main-timeline">

                        {MyTimeline.experience.map((exp,i) => {
                        return (
                        <section key={i} className="timeline">
                            <article className="timeline-content">
                                <h2 className="timeline-year">{exp.year}</h2>
                                <span className="timeline-icon"><i className={exp.icon}></i></span>
                                <h3 className="title">{exp.position}</h3>
                                <h4 className="place">{exp.place}</h4>
                                <p className="description"> {exp.description}</p>
                            </article>
                        </section>
                        )
                    })}
                    </div>
                </div>
            </section>
    </section>
    )
}