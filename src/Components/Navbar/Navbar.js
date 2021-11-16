import React, { useState } from 'react';
import {

    Link
} from "react-router-dom";

const Navbar = () => {
    const [isTrue, setIsTrue] = useState(true)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">TRAVEL</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        {
                            isTrue ? <> <li className="nav-item">
                                <Link className="nav-link" to="/myorder">My_Order</Link>
                            </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/manageorder">ManageOrder</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/manageorder">Log_Out</Link>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"><img style={{ height: '60px' }} className="img-fluid rounded-circle" alt="" src={sessionStorage.getItem("pic")} /> </Link>

                                </li>  </> : <li className="nav-item">
                                <Link className="nav-link" to="/login">Log-In</Link>

                            </li>
                        }






                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;