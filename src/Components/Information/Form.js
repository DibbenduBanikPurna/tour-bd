import React, { useState } from 'react';

const Form = ({ data }) => {
    const [add, setAdd] = useState('')
    const [date, setDate] = useState('')
    const [bookData, setBookData] = useState({})
    //console.log(bookData)
    //const date = new Date().toLocaleDateString()

    const handleSubmit = (e) => {


        e.preventDefault()
        console.log(bookData)
        fetch('http://localhost:5000/bookdata', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: sessionStorage.getItem("name"),
                email: sessionStorage.getItem("email"),
                address: bookData.add,
                date: bookData.date,
                destination: data.name

            }),


        })

    }
    const handleChange = (e) => {
        //console.log(e.target.name, e.target.value)
        setBookData({ [e.target.name]: e.target.value })
    }


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="Enter Addreess" name="add" />
                <br />
                <input onChange={handleChange} type="text" placeholder="Enter Name" name="name" />
                <br />
                <input onChange={handleChange} type="email" placeholder="Enter Email" name="email" />
                <br />
                <input onChange={handleChange} type="date" placeholder="Enter Date" name="date" />
                <br />
                <input type="submit" value="submt" />
            </form>
        </div>
    );
};

export default Form;


{/* <form onSubmit={handleSubmit} className="forms mb-4">

<label htmlFor="location">Enter Address</label>

<input type="text" onChange={(e) => setAdd(e.target.value)} name="address" required className="form-control" placeholder="Enter Your Address" />

<label htmlFor="destination">Email</label>

<input name="email" onFocus={handleChange} className="form-control" type="email" />
<label htmlFor="destination">Name</label>

<input name="name" onChange={handleChange} className="form-control" type="text" />


<label>From</label>

<input name="date" onChange={(e) => setDate(e.target.value)} required className="form-control" type="date" />

<label>To</label>

<input name="to" onFocus={handleChange} defaultValue={new Date().toDateString()} className="form-control" type="date" />
<br />
<button type="submit" className="btn btn-warning form-control">Start Booking</button>
</form> */}