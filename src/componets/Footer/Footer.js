import React from 'react';

const Footer = () => {
    return (
            <div className="copyRight text-center d-flex align-items-center justify-content-center" style={{background:'black', height:'80px', marginTop : '60px', color : 'white'}}>
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        
    );
};

export default Footer;