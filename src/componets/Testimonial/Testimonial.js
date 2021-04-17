import React from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import './Terminal.css'
import client1 from '../../images/client-1.jpg'
import client2 from '../../images/client-2.jpg'
import client3 from '../../images/client-3.png'
let testimonial = [
    {
        clientSays : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fugiat quas nobis earum provident recusandae optio assumenda nulla eaque amet.',
        clientImg: client1,
        name : 'Cataligo Dekosta',
        title : 'Designer'
    },
    {
        clientSays : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fugiat quas nobis earum provident recusandae optio assumenda nulla eaque amet.',
        clientImg: client2,
        name : 'Hustago Moris',
        title : 'Designer'
    },
    {
        clientSays : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fugiat quas nobis earum provident recusandae optio assumenda nulla eaque amet.',
        clientImg: client3,
        name : 'Mantaro jeola',
        title : 'Designer'
    }
]

const Testimonial = () => {
    return (
        <section className="testimonial">
          <div className="container">
          <div className="intro">
              <h1 className="text-center mb-3">Testimonials </h1>
              <p className="text-center">Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
          </div>
              <div className="row people">
              {
                testimonial.map(testimonial => <TestimonialDetails testimonial={testimonial}/>)
            }
              </div>
          </div>
        </section>
    );
};

export default Testimonial;