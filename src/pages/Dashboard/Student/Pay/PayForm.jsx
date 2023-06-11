import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import './PayForm.css'
const PayForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError,setPaymentError] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setPaymentError(error.message)
        } else {
            setPaymentError('')
            console.log('[PaymentMethod]', paymentMethod);
        }

    };
    return (
        <div>
            <>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button type="submit" disabled={!stripe}>
                        Pay
                    </button>
                </form>
            </>
        </div>
    );
};

export default PayForm;