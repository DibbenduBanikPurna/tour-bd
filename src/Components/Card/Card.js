import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';
import CardDetail from './CardDetail';


const Card = () => {
    const [tour, setTour] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => {
                setTour(data)
                //console.log(data)
            })
    }, [])
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