import React from 'react';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
       <main className="row align-items-center bg-img">
            <div className="col-md-6 offset-md-1">
                <div className="header-details">
                <h1>THE MobileRepair<br/>
                 Solve These Problems</h1>
                <p><span className="mr-2"><i className="fas fa-check"></i></span>Computer Repair Services</p>
                 <p><i className="mr-2 fas fa-check"></i>Laptop Repair Services</p>
                 <p><i className="mr-2 fas fa-check"></i>iPad Repair Services</p>
                 <p><i className="mr-2 fas fa-check"></i>Phone Repair Services</p>
                 <p><i className="mr-2 fas fa-check"></i>Television Repair Services</p>
                </div>
                <div>
                    <button className="btn-color">Read More</button>
                </div>
            </div>
            <div className="col-md-4">
            <div className="bg-form">
  <div class="form-row">
    <div class="form-group">
      <input type="email" class="form-control" id="name" placeholder="Enter Name"/>
    </div>
    <div class="form-group my-3">
      <input type="email" class="form-control" id="email" placeholder="Email"/>
    </div>
  </div>
  <div class="form-group mb-3">
    <input type="text" class="form-control" id="phone" placeholder="Phone"/>
  </div> 
  <div class="form-row mb-3">  
    <div class="form-group">
        <label htmlFor="inputState" className="mb-1">Type Of Repair</label>
      <select id="inputState" class="form-control">
        <option>Mobile Repair</option>
        <option>Phone Repair</option>
        <option>Laptop Repair</option>
        <option>Tab Repair</option>
      </select>
    </div>
  </div>
  <div class="form-group mb-3">
  <div class="form-group purple-border">
  <textarea class="form-control" id="exampleFormControlTextarea4" rows="3" placeholder="Enter Meassages"></textarea>
</div>
  </div>
  <button type="submit" class="form-control btn-color">Submit</button>
</div>
            </div>
       </main>
    );
};

export default HeaderMain;