import Carousel from 'react-bootstrap/Carousel';
import './imgCarousel.css';

export default function ImgCarousel() {

    return (
        <>
        <Carousel controls={false} interval={6000} pause="hover">
            <Carousel.Item>
                <img src='src\assets\adrian3.png'/>
            </Carousel.Item>
            <Carousel.Item>
                    <img src='src\assets\IMG_9681.jpg'/>
            </Carousel.Item>
            <Carousel.Item>
                    <img src='src\assets\IMG_9726.jpg'/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
}