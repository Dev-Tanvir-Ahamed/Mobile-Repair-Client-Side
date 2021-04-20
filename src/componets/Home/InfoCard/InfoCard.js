import React from 'react';

const InfoCard = ({info}) => {
    return (
        
            <div className="col-md-6">
                    <div className="d-flex align-items-center">
                        <div className="infoCard-icon" style={{fontSize:'40px',color:' #ff226d', paddingRight:'20px'}}>
                        {info.icon}
                        </div>
                        <div className="infoCard-details ml-2">
                        <h3>{info.title}</h3>
                        <p>{info.description}</p>
                        </div>
                    </div>
            </div>
        
    );
};

export default InfoCard;