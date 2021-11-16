import React, { useEffect, useState } from 'react';
import DetailOrder from './DetailOrder';

const MangeOrder = () => {
    const [bookInfo, setBookInfo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allbook')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookInfo(data)
            })
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/remove/${id}`, {
            method: 'Delete'
        })
        const remianItem = bookInfo.filter((b) => b._id !== id)
        console.log(remianItem)
        setBookInfo(remianItem)
    }

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'Put'
        })

    }
    return (
        <div>
            <h2>My Events</h2>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>#</th>
                        <th>Destination</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Travel-Date</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>action</th>
                        <th>confirm</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        bookInfo.map((book) => {
                            return <DetailOrder handleUpdate={handleUpdate} handleDelete={handleDelete} key={book._id} book={book} />
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MangeOrder;