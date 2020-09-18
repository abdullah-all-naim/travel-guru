import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Icon/Logo.png'

const Navigation = () => {
    return (
        <div className="d-flex justify-content-around mt-3">
            <div>
                <NavLink to="/">
                <img style={{width:'121px',heigth:'56px',opacity:'1'}} src={logo} alt=""/>
                </NavLink>
            </div>
            <div>
                <NavLink className="p-5 text-dark" to='/news'>News</NavLink>
                <NavLink className="p-5 text-dark" to='/destination'>Destination</NavLink>
                <NavLink className="p-5 text-dark" to='/blog'>Blog</NavLink>
                <NavLink className="p-5 text-dark" to='/contact'>Contact</NavLink>
               <NavLink className="px-4 py-2 btn btn-warning" to='/loginform'>Login</NavLink>
            </div>
        </div>
    );
};

export default Navigation;