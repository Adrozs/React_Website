import Carousel from 'react-bootstrap/Carousel';
import './imgCarousel.css';

export default function ImgCarousel() {

    return (
        <>
        <Carousel controls={false} interval={6000} pause="hover">
            <Carousel.Item>
                <img src='src\assets\images\about\school.jpg' />
            </Carousel.Item>
            <Carousel.Item>
                    <img src='src\assets\images\about\concert.jpg'/>
            </Carousel.Item>
            <Carousel.Item>
                    <img src='src\assets\images\about\padling.jpg'/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
}