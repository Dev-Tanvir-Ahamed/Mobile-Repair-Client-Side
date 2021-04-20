import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { serviceData } from '../Services/Services';
import './ServiceDetails.css'
const ServiceDetails = (props) => {
    let { id } = useParams();
    console.log(id);
    console.log(props);
    let services = props.services
    console.log(services);
    let {_id,icon, title, description, button, price} = services
    // let [serviceId, setServiceId] = useState({})

    // useEffect(() => {
    //     fetch(`http://localhost:5000/services/${_id}`)
    //     .then(res => res.json())
    //     .then(data => setServiceId(data))
    // }, [])
//     let handleService = () => {
       
//         fetch('http://localhost:5000/addService',
//  {
//       method: 'POST',
//      headers: { 'Content-Type': 'application/json' },
//        body: JSON.stringify(serviceData[0])
//    })
// }



    return (
           <div className="col-md-4 services-col">
                <div className="service-icon">
                {/* {icon} */}
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                 <p style={{color: "rgb(47, 83, 138"}}>{price + '$'}</p>
                 <Link className="text-decoration-none" to={`/serviceCart/${_id}`}>
               <button className="btn-color service-btn">Order Now</button>
               </Link>
           </div>
    );
};

export default ServiceDetails;