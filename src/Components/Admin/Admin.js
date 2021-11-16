import React, { useState } from 'react';
//import tourData from '../Data/Data';


const Admin = () => {
    const [data, setData] = useState([])

    // const handelPost = () => {
    //     fetch('http://localhost:5000/tour', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(tourData)
    //     })
    // }

    //console.log(data)
    const handleChange = (e) => {
        const info = {
            [e.target.name]: e.target.value
        }
        setData([...data, info])
        //console.log(e.target.name, e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)

    }
    return (
        <div className="text-center">
            <form onSubmit={handleSubmit}>
                <input onFocus={handleChange} name="name" type="text" placeholder="place name" />
                <br />
                <input onFocus={handleChange} type="number" name="id" placeholder="Id" />
                <br />
                <textarea onFocus={handleChange} name="food" placeholder="Enter Food" />
                <br />
                <textarea onFocus={handleChange} name="info" placeholder="Description" />
                <br />
                <textarea onFocus={handleChange} name="package" placeholder="Description" />
                <br />
                <textarea onFocus={handleChange} name="tripPlace" placeholder="Description" />
                <br />
                <input onFocus={handleChange} name="price" type="text" placeholder="price" />

                <br />
                <input onFocus={handleChange} name="days" type="number" placeholder="days" />
                <button className="btn btn-danger" type="submit">Post</button>
            </form>
            {/* <button onClick={handelPost}>post</button> */}
        </div>
    );
};

export default Admin;