import React, { useState } from 'react';
import Data from '../Data/Data';

const Admin = () => {
    const [data, setData] = useState({
        name: '',
        id: '',
        food: '',
        info: '',
        package: '',
        tripPlace: '',
        price: '',
        days: ''
    })
    console.log(data)
    const handleChange = (e) => {
        setData({
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/tourdata', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: data.name,
                id: data.id,
                food: data.food,
                info: data.info,
                package: data.package,
                tripPlace: data.tripPlace,
                price: data.price,
                days: data.days
            })

        })

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="name" type="text" placeholder="place name" />
                <br />
                <input onChange={handleChange} type="number" name="id" placeholder="Id" />
                <br />
                <textarea onChange={handleChange} name="food" placeholder="Enter Food" />
                <br />
                <textarea onChange={handleChange} name="info" placeholder="Description" />
                <br />
                <textarea onChange={handleChange} name="package" placeholder="Description" />
                <br />
                <textarea onChange={handleChange} name="tripPlace" placeholder="Description" />
                <br />
                <input onChange={handleChange} name="price" type="text" placeholder="price" />

                <br />
                <input onChange={handleChange} name="days" type="number" placeholder="days" />
                <button className="btn btn-danger" type="submit">Post</button>
            </form>
        </div>
    );
};

export default Admin;