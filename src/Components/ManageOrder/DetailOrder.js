import React from 'react';

const DetailOrder = ({ book, handleDelete, handleUpdate }) => {

    return (
        <tr>
            <td>{book.count}</td>
            <td>{book.destination}</td>
            <td>{book.name}</td>
            <td>{book.email}</td>
            <td>{book.date}</td>
            <td>{book.address}</td>
            <td className="text-danger">{book.status}</td>
            <td onClick={() => handleDelete(book._id)} className="text-danger">delete</td>
            <td onClick={() => handleUpdate(book._id)} className="text-primary">play now</td>
        </tr>

    );
};

export default DetailOrder;