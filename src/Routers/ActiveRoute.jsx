/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from "react-router-dom";
import './ActiveRoute.css'
const ActiveRoute = ({to,children}) => {
    return (
            <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
           {children}
        </NavLink>
    );
};

export default ActiveRoute;