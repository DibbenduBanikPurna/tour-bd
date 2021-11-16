import React from 'react';
import Card from '../Card/Card';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <Card />
            <br />
            <About />
            <br />
            <Contact />
        </div>
    );
};

export default Home;