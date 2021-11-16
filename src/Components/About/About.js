import React from 'react';

const About = () => {
    return (
        <div className="container">
            <h1 className="text-center">About Us</h1>
            <div className="row">
                <div className="col-md-4 m-5"> <h2>Hello. Our agency has been present for over 10 years in the market. We make the most of all our customers.</h2>
                </div>

            </div>
            <div className="row">
                <div className="col-md-6">
                    <h5>travel-hype team of guides</h5>
                    <h2>Our dedicated <br /><span className="display-5 text-info">Holiday-Hype team</span></h2>
                    <p className="text-muted mt-3">Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership rather than prospective experiences.</p>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" alt="" src="https://i.huffpost.com/gen/3108022/images/o-MOUNTAIN-CLIMBING-facebook.jpg" />
                </div>
            </div>
        </div>
    );
};

export default About;