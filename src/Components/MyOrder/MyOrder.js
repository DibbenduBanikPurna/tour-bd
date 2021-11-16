import React, { useEffect, useState } from 'react';
import OrderDetail from './OrderDetail';

const MyOrder = () => {
    const [bookedData, setBokedData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bookdata')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBokedData(data);
            })
    }, [])
    return (
        <div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>#</th>
                        <th>Destination</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Addreess</th>
                        <th>Travel Date</th>
                        <th>Status</th>


                    </tr>

                </thead>
                <tbody>

                    {
                        bookedData.map((book) => {
                            return <OrderDetail key={book._id} book={book} />
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;