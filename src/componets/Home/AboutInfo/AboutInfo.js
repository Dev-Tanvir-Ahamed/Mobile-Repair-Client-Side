import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

let infoData = [
    {
        title: 'Life Time Warrenty',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.',
        icon:<i class="fas fa-clock"></i>
    },
    {
        title: 'Low Cost Services',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.',
        icon:<i class="fas fa-money-check-alt"></i>
    },
    {
        title: '24/7 Live Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.',
        icon:<i class="fas fa-headphones"></i>
    },
    {
        title: 'Fast Delivery',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.',
        icon:<i class="fas fa-rocket"></i>
    }
]


const AboutInfo = () => {
    return (
        <section className="row">
            {
                infoData.map(info => <InfoCard info={info}/>)
            }
        </section>
    );
};

export default AboutInfo;