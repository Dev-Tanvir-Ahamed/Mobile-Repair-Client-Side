import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import ServiceCart from '../../ServicesCart/ServiceCart/ServiceCart';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

// export let serviceData = [

//     {
//         id : 1,
//         icon : <i class="fas fa-mobile"></i>,
//         title:'Mobile Repair',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         price : 250,
//         button : <button className="btn-color">Add to Cart</button>,

//     },
//     {
//         id : 2,
//         icon : <i class="fas fa-tablet-alt"></i>,
//         title:'Ipad Repair',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         price : 350,
//         button : <button className="btn-color">Add to Cart</button>,

//     },
//     {
//         id : 3,
//         icon : <i class="fas fa-tv"></i>,
//         title:'Television Repair',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         price : 300,
//         button : <button className="btn-color">Add to Cart</button>,

//     }
// ]

const Services = () => {
    
    let [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/addservices')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    // let handleService = () => {
           
    //         fetch('http://localhost:5000/addService',
    //         {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(services)
    //         })
    //     }
    return (
     
            <section className="services">
           <div className="text-center">
           <h1 className="mb-2">OUR <span style={{color:'rgb(47, 83, 138)'}}>SERVICES</span></h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem
voluptatem obcaecati!</p>
           </div>
           {/* <button onClick={handleService}>Ad All</button> */}
           <div className="container">
           <div className="row service-details">
               {
                   services.map(service => <ServiceDetails services={service}/>)
               }
           </div>
           </div>
          
       </section>
     
    );
};


export default Services;