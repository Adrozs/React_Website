import { Helmet } from 'react-helmet';
import ContactForm from "../components/ContactForm";

export const ContactPage = () => {
    return (
        <>
        <Helmet>
            <title>Adrian Rozsahegyi | Contact</title>
        </Helmet>
        <main>
            <section className="intro-text">
                <h1>Contact me</h1>
            </section>

            <ContactForm/>
        </main>
        </>
    )
}