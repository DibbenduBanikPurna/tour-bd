import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Card.css'
const CardDetail = ({ tour }) => {
    //console.log(tour.id)
    return (
        <div className="col-md-6 mt-4">

            <Card className="bg-dark text-white">
                <Card.Img className="img-fluid rounded" src={tour.img} alt="Card image" />



                <div className="hob">
                    <Card.Title className="bg-muted">{tour.name}<span style={{ float: 'right' }}>{tour.price}</span></Card.Title>
                    <p>{tour.desc.substring(0, 120)}...</p>
                    <Link to={`/${tour._id}`}>
                        <button className=" form-control btn btn-primary">explore now</button>
                    </Link>
                </div>


            </Card>


        </div>
    );
};

export default CardDetail;