import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
// import OrderedList from '../OrderedList/OrderedList';
// import Review from '../Review/Review';

const ServiceCart = () => {
    let { id } = useParams();
    console.log(id);
    let [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // let [services, setServices] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/addservices')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // }, [])

     let [serviceUser, setServiceUser] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
        .then(res => res.json())
        .then(data => setServiceUser(data))
    }, [])


    // console.log(services.title)
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    {/* <OrderedList/>
                    <Review/> */}
                    <Link className="text-decoration-none" to="/orderList">
                            <h1>Order List</h1>
                    </Link>
                    <Link className="text-decoration-none" to="/review">
                            <h1>Review</h1>
                    </Link>
                </div>
                <div className="col-md-8">

                   <form action="" className="mb-4">
                       <input className="form-control" type="text" value={loggedInUser.name}/>
                       <input className="form-control my-3" type="text" value={loggedInUser.email}/>
                       <input className="form-control" type="text" value={serviceUser.title}/>
                   </form>

                   <ProcessPayment/>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;