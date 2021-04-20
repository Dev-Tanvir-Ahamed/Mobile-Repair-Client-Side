import React from 'react';

const ContactForm = () => {
    return (
        <div className="col-md-8">
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
  <div class="form-group mb-3">
  <div class="form-group purple-border">
  <textarea class="form-control" id="exampleFormControlTextarea4" rows="3" placeholder="Enter Meassages"></textarea>
</div>
  </div>
  <button type="submit" class="form-control btn-color">Send Your Meassage</button>
</div>
        </div>
    );
};

export default ContactForm;