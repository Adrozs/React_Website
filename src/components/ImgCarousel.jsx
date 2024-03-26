import School from "./src/assets/images/About/School.jpg";
import Concert from "./src/assets/images/About/Concert.jpg";
import Padling from "./src/assets/images/About/Padling.jpg";


import Carousel from 'react-bootstrap/Carousel';
import './imgCarousel.css';

export default function ImgCarousel() {

    return (
        <>
        <Carousel controls={false} interval={6000} pause="hover">
            <Carousel.Item>
                <img src={School}/>
            </Carousel.Item>
            <Carousel.Item>
                    <img src={Concert} />
            </Carousel.Item>
            <Carousel.Item>
                    <img src={Padling} />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
}