import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PayForm from './PayForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_key);
const Pay = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-4'>Payment</h1>
            
            <Elements stripe={stripePromise}>
                <PayForm data={data}/>
            </Elements>
        </div>
    );
};

export default Pay;