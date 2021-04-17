import React from 'react';
import ServiceDetails from '../componets/ServiceDetails/ServiceDetails';

let setviceData = [
    {
        icon : <i class="fas fa-mobile"></i>,
        title:'Mobile Repair',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        button : '',

    },
    {
        icon : <i class="fas fa-tablet-alt"></i>,
        title:'Ipad Repair',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        button : '',

    },
    {
        icon : <i class="fas fa-tv"></i>,
        title:'Television Repair',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        button : '',

    }
]

const Services = () => {
    return (
       <section className="services">
           <div className="text-center">
           <h1 className="mb-2">OUR <span style={{color:'rgb(47, 83, 138)'}}>SERVICES</span></h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem
voluptatem obcaecati!</p>
           </div>
           <div className="container">
           <div className="row service-details">
               {
                   setviceData.map(service => <ServiceDetails service={service}/>)
               }
           </div>
           </div>
          
       </section>
    );
};

export default Services;