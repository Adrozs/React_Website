import Carousel from 'react-bootstrap/Carousel';
import './imgCarousel.css';

export default function ImgCarousel() {

    return (
        <>
        <Carousel controls={false} interval={6000} pause="hover">
            <Carousel.Item>
                <img src='.\src\assets\images\About\school.jpg' />
            </Carousel.Item>
            <Carousel.Item>
                    <img src='.\src\assets\images\About\Concert.jpg'/>
            </Carousel.Item>
            <Carousel.Item>
                    <img src='.\src\assets\images\About\padling.jpg'/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
}