import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Icon/Logo.png'
import star from '../../Icon/star.png'
import hotel1 from '../../Images/hotel1.png'
import hotel2 from '../../Images/hotel2.png'
import hotel3 from '../../Images/hotel3.png'

const ShowData = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <div className = "d-flex justify-content-around mt-3">
                <div>
                    <NavLink to="/">
                        <img style = {{ width: '121px', heigth: '56px', opacity: '1' }} src = {logo} alt="" />
                    </NavLink>
                </div>
                <div className = 'mt-3'>
                    <NavLink className = "p-5 text-dark" to='/news'>News</NavLink>
                    <NavLink className = "p-5 text-dark" to='/destination'>Destination</NavLink>
                    <NavLink className = "p-5 text-dark" to='/blog'>Blog</NavLink>
                    <NavLink className = "p-5 text-dark" to='/contact'>Contact</NavLink>
                    <img src = {loggedInUser.photoURL} style = {{ width: '30px', height: '30px', borderRadius: '50%' }} alt="" />
                    <p className = "d-inline">{loggedInUser.name}</p>
                    <p className = "d-inline">{loggedInUser.email}</p>
                </div>
            </div>
            <hr />
            <h2 className = "text-center" > Hi There {loggedInUser.name} Welcome</h2>
            <div className = 'mt-3 container' style = {{ fontFamily: 'revert' }}>
                <p className = 'text-muted'>252 stays Apr 13-17 guests</p>
                <h4 className = 'mb-3 font-weight-bold'>Stay in your desired hotel</h4>
                <div className = 'd-flex mb-5'>
                    <div>
                        <img src = {hotel1} style = {{ width: '270px' }} alt="" />
                    </div>
                    <div className = 'px-4'>
                        <h5>Light bright airy stylish apt & safe peaceful stay</h5>
                        <p className = 'text-muted'>4 guests 2 bedrooms 2 beds 2 baths</p>
                        <p className = 'text-muted'>Wif Air conditioning Kitchen</p>
                        <p className = 'text-muted'>Cancellation fexibility availiable</p>
                        <div className = 'd-flex'>
                            <img src = {star} style = {{ width: '20px', height: '20px', marginTop: '3px', marginRight: '3px' }} alt="" />
                            <p className = 'mr-2'>4.9(20)</p>
                            <p className = 'font-weight-bold'>$34/</p>
                            <p className = 'mr-2'>night</p>
                            <p className = 'text-muted'>$167 total</p>
                        </div>
                    </div>
                </div>
                <div className = 'd-flex mb-5'>
                    <div>
                        <img src = {hotel2} style = {{ width: '270px' }} alt="" />
                    </div>
                    <div className = 'px-4'>
                        <h5>Apartment in Lost Panorama</h5>
                        <p className = 'text-muted'>4 guests 2 bedrooms 2 beds 2 baths</p>
                        <p className = 'text-muted'>Wif Air conditioning Kitchen</p>
                        <p className = 'text-muted'>Cancellation fexibility availiable</p>
                        <div className = 'd-flex'>
                            <img src = {star} style = {{ width: '20px', height: '20px', marginTop: '3px', marginRight: '3px' }} alt="" />
                            <p className = 'mr-2'>4.8(10)</p>
                            <p className = 'font-weight-bold'>$52/</p>
                            <p className = 'mr-2'>night</p>
                            <p className = 'text-muted'>$167 total</p>
                        </div>
                    </div>
                </div>
                <div className = 'd-flex'>
                    <div>
                        <img src = {hotel3} style = {{ width: '270px' }} alt="" />
                    </div>
                    <div className = 'px-4 mb-5'>
                        <h5>AR Lounge & Pool (r&r + b&b)</h5>
                        <p className = 'text-muted'>4 guests 2 bedrooms 2 beds 2 baths</p>
                        <p className = 'text-muted'>Wif Air conditioning Kitchen</p>
                        <p className = 'text-muted'>Cancellation fexibility availiable</p>
                        <div className = 'd-flex'>
                            <img src = {star} style = {{ width: '20px', height: '20px', marginTop: '3px', marginRight: '3px' }} alt="" />
                            <p className = 'mr-2'>4.9(25)</p>
                            <p className = 'font-weight-bold'>$44/</p>
                            <p className = 'mr-2'>night</p>
                            <p className = 'text-muted'>$167 total</p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default ShowData;
