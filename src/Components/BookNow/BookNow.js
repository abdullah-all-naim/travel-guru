import React from 'react';
import {  useHistory, useLocation, useParams } from 'react-router-dom';
import fakeData from '../FakeData/FakeData'
import coxsbazar from '../../Images/coxsbazar.png'
import CarouselNavigation from '../CarouselNavigation/CarouselNavigation';


const BookNow = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/newuserform" } };
    const { place } = useParams(); 
    let detail = fakeData.find( (x) => x.place === place )

    return (
        <div style = {{
            backgroundImage: `url(${ coxsbazar })`, backgroundSize: 'cover', width: '1519px', height: '900px', backgroundRepeat: 'no-repeat',paddingTop: '5px'
        }}>
            <CarouselNavigation />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                
                <div className = 'w-50' style={{ marginTop: '80px' }}>
                    <h1 className = 'text-white' style={{fontFamily: 'Bebas Neue', fontSize: '95px'}}>{detail.place}</h1>
                    <p className = 'lead text-white' style={{fontFamily: 'Montserrat'}}>{detail.info}</p>
                </div>
                <div style = {{ backgroundColor: 'white', border: '1px solid lightGrey', padding: '50px', marginTop: '60px', width: '470px', height: '427px', borderRadius: '20px', marginLeft:'15px' }}>
                    <form onSubmit = {() => history.replace(from)}>
                        <div class = "form-row">
                            <div class = "form-group col-md-12">
                                <label for = "Origin" className = "text-muted">Origin</label>
                                <input type="text" className = "form-control" name = 'name' required />
                            </div>
                            <div class="form-group col-md-12">
                                <label for = "Destination" className = "text-muted">Destination</label>
                                <input type = "text" className = "form-control" name = 'name' required value = {detail.place} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for = "from" className = "text-muted">From</label>
                                <input type = "date" className = "form-control" name = 'date' required/>
                            </div>
                            <div class="form-group col-md-6">
                                <label for = "to" className="text-muted">To</label>
                                <input type = "date" className = "form-control" name = 'date'  required/>
                            </div>
                        </div>
                        <button className = "btn btn-warning w-100 font-weight-bold" type="submit">Start Booking</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookNow;