import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: '550px' }}
                        className="d-block w-100"
                        src="https://media.cntraveler.com/photos/5fd0ded7aa9fb907eb94c0f2/master/w_1600%2Cc_limit/BestCitiesInTheWorld-2020-Chiang%2520Mai%2C%2520Thailand-GettyImages-668710572.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Chiang Mai, Thailand</h3>
                        <p className="text-light">Long the cultural redoubt for Bangkok-based expats and art enthusiasts, Chiang Mai has evolved into a must-do on the Southeast Asia circuit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '500px' }}
                        className="d-block w-100"
                        src="https://media.cntraveler.com/photos/5ca4fa6c2741324d1b073bac/master/w_1600%2Cc_limit/Copenhagen_GettyImages-1044373262.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Copenhagen, Denmark</h3>
                        <p className="text-light">Despite its reputation for churning out cutting-edge restaurants and hotels, Copenhagen has an ageless charm that makes you want to keep going back.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '500px' }}
                        className="d-block w-100"
                        src="https://media.cntraveler.com/photos/5e4db8cca601af0008fc311e/master/w_1600%2Cc_limit/Doha%2520Qatar%2520GettyImages-566379885.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Doha, Qatar</h3>
                        <p className="text-light">If Dubai is too much for you to handle, then Doha may be more your cup of tea. Founded on a turquoise bay in the 1820s, this former fishing village is lined with Emerald City-esque skyscrapers,</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;