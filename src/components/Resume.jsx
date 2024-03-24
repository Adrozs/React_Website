import MyResume from '../assets/Json/resume.json';
import './resume.css';

export default function Resume () {
 
    return (
        <>
            <section className="content-container content-width">
                <section className="content">  
                   
                    <h2>Work experience</h2>               
                        {MyResume.work.map((wrk,i) => {
                            return (
                                <article key={i} className="info-container">
                                <h3 > {wrk.position}</h3>
                                <div className="title-and-year-container">
                                    <h5>{wrk.years}</h5>
                                    <h4>{wrk.workplace}</h4>
                                </div>
                                <p>{wrk.description}</p>
                                </article>
                            )
                            })
                        }

                    <h2 className='border-top'>Education</h2>
                        {MyResume.education.map((edu, i) => {
                            return (
                                <article key={i} className="info-container">
                                    <h3 > {edu.name}</h3>
                                    <div className="title-and-year-container">
                                        <h5>{edu.years}</h5>
                                        <h4>{edu.description}</h4>
                                    </div>

                                </article>
                            )
                        })
                        }

                    <h2 className='border-top'>Courses</h2>
                        {MyResume.courses.map((cor, i) => {
                            return (
                                <article key={i} className="info-container">
                                    <h3 > {cor.title}</h3>
                                    <div className="title-and-year-container">
                                        <h5>{cor.year}</h5>
                                        <h4>{cor.issuer}</h4>
                                    </div>
                                    <p>{cor.description}</p>
                                </article>
                            )
                        })
                        }                        
                        <a href="https://github.com/Adrozs" target="_blank" className="my-btn"><i className="fa-brands fa-linkedin"></i> View on LinkedIn</a>
                </section>
                <a href="./AR_CV.pdf" download="Adrian Rozsahegyi CV" target="_blank" className="my-btn cv-button">Download my CV <span className="material-symbols-outlined download-icon">
                    download
                </span></a>
            </section>
        </>
    )
}