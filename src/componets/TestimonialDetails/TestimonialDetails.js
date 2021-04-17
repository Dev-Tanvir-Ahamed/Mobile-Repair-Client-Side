import React from 'react';
import './TestimonialDetails.css'
const TestimonialDetails = ({testimonial}) => {
    console.log(testimonial);
    return (
              <div className="col-md-4 col-lg-4 item">
                  <div className="box">
                      <p className="description">{testimonial.clientSays}</p>
                  </div>
                  <div className="author"><img className="rounded-circle" src={testimonial.clientImg}/>
                      <h5 className="name">{testimonial.name}</h5>
                      <p className="title">{testimonial.title}</p>
                </div>
              </div>
    );
};

export default TestimonialDetails;