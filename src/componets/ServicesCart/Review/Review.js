import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const Review = () => {
    let [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let [review, setReview] = useState({
       username : loggedInUser.name,
       review : ''
    })

    let handleSubmit = (e) => {
        e.preventDefault()
        let reviewData = {...review}
        reviewData = e.target.value
        setReview(reviewData)
            console.log(reviewData);
    }
    return (
        <div className="container">
                  <div className="row mt-5">
                <div className="col-md-4">
                    <Link className="text-decoration-none" to="/orderList">
                            <h1>Order List</h1>
                    </Link>
                    <Link className="text-decoration-none" to="/review">
                            <h1>Review</h1>
                    </Link>
                </div>
                <div className="col-md-8">
                <form onSubmit={handleSubmit}>
                <input className="form-control" type="text" value={loggedInUser.name}/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Meassage"></textarea>
                    <button type="submit">Submit</button>
             </form>
                </div>
        </div>
        </div>
    );
};

export default Review;