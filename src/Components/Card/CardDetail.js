import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Card.css'
const CardDetail = ({ tour }) => {
    //console.log(tour.id)
    return (
        <div className="col-md-6 mt-4">
            <Link to={`/${tour.id}`}>
                <Card className="bg-dark text-white">
                    <Card.Img className="img-fluid rounded" src={tour.pic} alt="Card image" />



                    <div className="hob">
                        <Card.Title className="bg-muted">{tour.name}<span style={{ float: 'right' }}>{tour.price}</span></Card.Title>
                        <p className="text-light">{tour.place} <span style={{ float: 'right' }}> {tour.days} days </span> </p>
                    </div>


                </Card>
            </Link>

        </div>
    );
};

export default CardDetail;