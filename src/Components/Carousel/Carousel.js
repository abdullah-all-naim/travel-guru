import React, { useState } from 'react';
import coxsbazar from '../../Images/coxsbazar.png'
import coxbazar from '../../Images/coxbazar.png'
import sundorban from '../../Images/sundorbon.png'
import sajek from '../../Images/Sajek.png'
import sreemongol from '../../Images/Sreemongol.png'
import { Link } from 'react-router-dom';
import CarouselNavigation from '../CarouselNavigation/CarouselNavigation';

const Carousel = () => {

    return (
        <div  style = {{
            backgroundImage: `url(${coxsbazar})`, backgroundSize: 'cover', width: '1519px',height: '900px', backgroundRepeat: 'no-repeat'}}>
            <div id="carouselExampleCaptions" className = "carousel slide pt-2" data-ride="carousel">
                <div className = "carousel-inner">
                    <CarouselNavigation />
                    <div className = "carousel-item active">
                        <div  style = {{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                            <div className = "p-5 w-50 text-white">
                                <h1  style = {{fontFamily: 'Bebas Neue', fontSize: '95px'}}>COX'S BAZAR</h1>
                                <p> Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum vitae doloremque quo illo nostrum quae maiores reiciendis a voluptates doloribus.</p>
                                <Link to="/booknow/COX'S BAZAR" className = "btn btn-warning font-weight-bold">Book now >></Link>
                            </div>
                            <div>
                                <img src = {coxbazar}  style = {{ width: '250px', borderRadius: '15px', height: '385px' }} className = "d-block" alt="..." />
                            </div>
                        </div>

                    </div>
                    <div className = "carousel-item">
                        <div  style = {{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                            <div className = "p-5 w-50 text-white">
                                <h1  style = {{fontFamily: 'Bebas Neue', fontSize: '95px'}}>SUNDARBANS</h1>
                                <p> Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum vitae doloremque quo illo nostrum quae maiores reiciendis a voluptates doloribus.</p>
                                <Link to="/booknow/SUNDARBANS" className = "btn btn-warning font-weight-bold">Book now >></Link>
                            </div>
                            <div>
                                <img src = {sundorban}  style = {{ width: '250px', borderRadius: '15px', height: '385px' }} className = "d-block" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className = "carousel-item">
                        <div  style = {{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                            <div className = "p-5 w-50 text-white">
                                <h1  style = {{fontFamily: 'Bebas Neue', fontSize: '95px'}}>SAJEK</h1>
                                <p> Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum vitae doloremque quo illo nostrum quae maiores reiciendis a voluptates doloribus.</p>
                                <Link to="/booknow/SAJEK" className = "btn btn-warning font-weight-bold">Book now >></Link>
                            </div>
                            <div>
                                <img src = {sajek}  style = {{ width: '250px', borderRadius: '15px', height: '385px' }} className = "d-block" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className = "carousel-item">
                        <div  style = {{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                            <div className = "p-5 w-50 text-white">
                                <h1  style = {{fontFamily: 'Bebas Neue', fontSize: '95px'}}>SREEMANGAL</h1>
                                <p> Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum vitae doloremque quo illo nostrum quae maiores reiciendis a voluptates doloribus.</p>
                                <Link to="/booknow/SREEMANGAL" className = "btn btn-warning font-weight-bold">Book now >></Link>
                            </div>
                            <div>
                                <img src = {sreemongol}  style = {{ width: '250px', borderRadius: '15px', height: '385px' }} className = "d-block" alt="..." />
                            </div>
                        </div>

                    </div>
                </div>
                <a className = "carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className = "carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className = "sr-only">Previous</span>
                </a>
                <a className = "carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className = "carousel-control-next-icon" aria-hidden="true"></span>
                    <span className = "sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Carousel;
