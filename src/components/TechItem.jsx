import MyTechItems from '../assets/Json/techStack.json';
import './techItem.css';

export default function TechItem() {
    const categories = Object.keys(MyTechItems);

    return (
        <>
            {categories.map(category => (
                <section className='category-container'>
                <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                <section key={category} className='techItem-container'>
                    {MyTechItems[category].map((item, i) => (
                        <article key={i} className="item-container">
                            <section className="icon-container hoverable">
                                <i className={item.icon}></i>
                            </section>
                            <section className="title-container">
                                <h3>{item.title}</h3>
                            </section>
                            <section className="text-container">
                                <p>{item.text}</p>
                            </section>
                        </article>
                    ))}
                </section>
                </section>
            ))}
        </>
    );
}