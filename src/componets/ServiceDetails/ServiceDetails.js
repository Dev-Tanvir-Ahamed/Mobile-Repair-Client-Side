import React from 'react';
import './ServiceDetails.css'
const ServiceDetails = ({service}) => {
    return (
           <div className="col-md-4 services-col">
                <div className="service-icon">
                {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
           </div>
    );
};

export default ServiceDetails;