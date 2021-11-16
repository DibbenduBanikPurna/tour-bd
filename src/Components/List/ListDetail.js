import React, { useState } from 'react';

const ListDetail = ({ book }) => {
    const [isAppoved, setIsApproved] = useState(false)
    console.log(book)
    return (

        <tr>

            <td>{book.name}</td>
            <td>{book.email}</td>
            <td>{book.origin} </td>

            <td>
                {book.destination}
            </td>
            <td>   <button onClick={() => setIsApproved(true)} className={isAppoved ? 'btn btn-success' : 'btn btn-danger'}>Appoved</button></td>
        </tr>



    );
};

export default ListDetail;