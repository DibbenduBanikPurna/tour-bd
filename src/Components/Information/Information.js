import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
//import Data from '../Data/Data';
import './Information.css'
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';



// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';




import Form from './Form';

// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));


const Information = () => {
    const [data, setData] = useState({})


    const [isLoading, setIsLoading] = useState(true)





    const { id } = useParams()
    console.log(id)





    useEffect(() => {

        fetch('http://localhost:5000/singletour/${id}')
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setData(data)
                setIsLoading(false)
            })


    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">

                    {isLoading ? <Spinner className="m-5" animation="border" role="status">
                        <span className="visually-hidden ">Loading...</span>
                    </Spinner> :
                        <Card sx={{ maxWidth: 605 }}>

                            <CardMedia
                                component="img"
                                height="194"
                                image={data.img}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {data.name}
                                </Typography>
                                <Typography variant="body5" color="text.secondary">
                                    price:{data.price}
                                </Typography>

                                <Typography paragraph>{data.desc}</Typography>
                            </CardContent>


                        </Card>
                    }
                </div>
                <div className="col-md-3">
                    <Form data={data} />
                </div>
            </div>
        </div>
    );
};

export default Information;