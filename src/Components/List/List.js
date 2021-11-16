import React, { useEffect, useState } from 'react';
import ListDetail from './ListDetail';

const List = () => {
    const [bookPerson, setBookPerson] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/booklist')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookPerson(data)
            })
    }, [])
    return (
        <div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Duration</th>
                        <th>Origin</th>
                        <th>Destination</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        bookPerson.map((book) => {
                            return <ListDetail key={book._id} book={book} />
                        })
                    }

                </tbody>
            </table>
            {/* {
                bookPerson.map((book) => {
                    return <ListDetail key={book._id} book={book} />
                })
            } */}
        </div>
    );
};

export default List;