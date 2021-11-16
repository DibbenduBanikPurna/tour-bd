import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
//import Data from '../Data/Data';
import CardDetail from './CardDetail';


const Card = () => {
    const [tour, setTour] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/alltour')
            .then(res => res.json())
            .then(data => {
                setTour(data)
                setIsLoading(false)
                //console.log(data)
            })
    }, [])
    return (
        <div className="container">
            <div className="row mt-5">
                {
                    isLoading ? <Spinner className="m-auto" animation="border" role="status">
                        <span className="visually-hidden ">Loading...</span>
                    </Spinner> :
                        tour.map((tour) => {
                            return <CardDetail key={tour._id} tour={tour} />
                        })
                }

            </div>
        </div>
    );
};

export default Card;