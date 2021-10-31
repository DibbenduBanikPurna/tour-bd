import React, { useState } from 'react';
import Data from '../Data/Data';
import CardDetail from './CardDetail';


const Card = () => {
    const [tour, setTour] = useState(Data)
    return (
        <div className="container">
            <div className="row mt-5">
                {
                    tour.map((tour) => {
                        return <CardDetail tour={tour} />
                    })
                }

            </div>
        </div>
    );
};

export default Card;