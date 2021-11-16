import React from 'react';

const OrderDetail = ({ book }) => {
    console.log(book)
    return (
        <tr>
            <td>{book.count}</td>
            <td>{book.destination}</td>
            <td>{book.name}</td>
            <td>{book.email}</td>
            <td>{book.date}</td>
            <td>{book.address}</td>
            <td className="text-danger">{book.status}</td>

        </tr>

    );
};

export default OrderDetail;