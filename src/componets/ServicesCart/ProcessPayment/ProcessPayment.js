import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCartForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51IiHomJgjdytaDs8WgUXr3pSoVnrntCkQAtAmFwQUPlXd1geVwutFsjeHeOrFzcKEwHNz5Bc6g7udwR0042Dnssh008fxsgO2R');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
                <SimpleCartForm/>
        </Elements>
    );
};

export default ProcessPayment;