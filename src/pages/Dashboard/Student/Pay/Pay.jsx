import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PayForm from './PayForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_key);
const Pay = () => {
    console.log(import.meta.env.VITE_Payment_key);
    const data = useLoaderData();
    return (
        <div>
            <h1>Payment</h1>
            <Elements stripe={stripePromise}>
                <PayForm />
            </Elements>
        </div>
    );
};

export default Pay;