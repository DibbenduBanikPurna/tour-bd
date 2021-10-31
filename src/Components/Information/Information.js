import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import Data from '../Data/Data';
import './Information.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const Information = () => {
    const [info] = useState(Data)
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    //console.log(info)

    const [data, setData] = useState({})
    const { id } = useParams({})

    const handleSubmit = (e) => {
        e.preventDefult()
    }
    const handleChange = (e) => {

    }
    const date = new Date().toLocaleDateString()

    useEffect(() => {
        const remain = info.filter((info) => info.id == id)
        console.log(remain[0])
        setData(remain[0])


    }, [id])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {/* <img className="img-fluid" src={data.pic} alt="" />
                    <p>ট্যুর প্ল্যান:{data.info}</p>
                    <p>{data.price}</p>
                    <p>{data.package}</p>
                    <p>{data.food}</p> */}
                    <Card sx={{ maxWidth: 605 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }

                            title="tour-place:"
                            subheader={data.tripPlace}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={data.pic}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <span className="text-info"> ট্যুর প্ল্যান:</span>{data.package}
                            </Typography>
                            <br />
                            <Typography paragraph><span className="text-danger">খাবারঃ</span>{data.food}</Typography>
                            <Typography paragraph></Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                {data.price}
                            </IconButton>
                            <IconButton aria-label="share">
                                {data.name}
                            </IconButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Method:</Typography>

                                <Typography paragraph>
                                    {data.info}
                                </Typography>

                                <Typography paragraph>

                                </Typography>
                                <Typography>

                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>

                </div>
                <div className="col-md-3">
                    <form onSubmit={handleSubmit} className="forms mb-4">
                        <label htmlFor="location">Origin</label>

                        <input name="name" onFocus={handleChange} required className="form-control" type="text" placeholder="Enter Location" />

                        <label htmlFor="destination">Destination</label>

                        <input onFocus={handleChange} className="form-control" type="text" placeholder="Enter Destination" />

                        <label>From</label>

                        <input defaultValue={date} name="from" onFocus={handleChange} required className="form-control" type="calender" />

                        <label>To</label>

                        <input name="to" onFocus={handleChange} required className="form-control" type="date" />
                        <br />
                        <button className="btn btn-warning form-control">Start Booking</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Information;