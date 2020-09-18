import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../Icon/Logo1.png'

const CarouselNavigation = () => {
    return (
        <div className="d-flex justify-content-around mt-3">
            <div className='d-flex'>
                <NavLink to="/">
                    <img style={{ width: '121px', heigth: '56px',marginRight:'100px' }} src={logo1} alt="" />
                </NavLink>
                <input type="text" class="form-control mt-2" style={{opacity:'.7'}} placeholder='Search your destination' />
            </div>
            <div>
                    <NavLink className="pr-5 text-white" to='/news'>News</NavLink>
                    <NavLink className="p-4 text-white" to='/destination'>Destination</NavLink>
                    <NavLink className="p-4 text-white" to='/blog'>Blog</NavLink>
                    <NavLink className="p-4 text-white" to='/contact'>Contact</NavLink>
                    <NavLink className="px-5 py-2 btn btn-warning" to='/loginform'>Login</NavLink>
            </div>
            </div>
    );
};

export default CarouselNavigation;
