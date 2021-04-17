import React from 'react';
import BrokenMobile from '../../../images/brokenPhone.jpg'
import AboutInfo from '../../AboutInfo/AboutInfo';
const About = () => {
    return (
        <section className="about-section mt-5 container">
            <div className="row">
                <div className="col-md-4">
                    <img className="img-fluid" src={BrokenMobile} alt=""/>
                </div>
                <div className="col-md-8">
                    <div className="about-details mb-4">
                    <h1>WELCOME TO <span style={{color:'#2F538A'}}>MOBILE REPAIR</span> </h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Quos dolo rem consequ untur, natus laudantium commodi earum aliquid in ullam.Lorem ipsum. consectetur adipisi cing elit. Quos dolo rem consequ untur, natus laudantium commodi earum aliquid in ullam dantium commodi earum aliquid in ullam.Lorem ipsum.</p>
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sunt ut dolorem laboriosam culpa excepturi sed distinctio eius! Ut magnam numquam libero quia vero blanditiis fugit corporis quisquam, debitis quidem laudantium deleniti. libero quia vero blanditiis fugit corporis quisquam, debitis quidem laudantium deleniti</small>
                    </div>
                    <AboutInfo/>
                </div>
            </div>
        </section>
    );
};

export default About;