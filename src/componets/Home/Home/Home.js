import React from 'react';
import Services from '../../../Services/Services';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import Testimonial from '../../Testimonial/Testimonial';
import About from '../About/About';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Services/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;