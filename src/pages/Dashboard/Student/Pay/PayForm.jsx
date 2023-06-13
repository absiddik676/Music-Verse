import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../../Provider/AuthProvider';
const PayForm = ({ data }) => {
    console.log(data);
    const { user } = useContext(AuthContext)
    console.log(user);
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState('')
    const [paymentSuccess, setPaymentSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [Processing, setProcessing] = useState(false)
    const price = data.price;
    useEffect(() => {
       if(data.price > 0){
        axios.post(`${import.meta.env.VITE_mainURL}/create-payment-intent`, { price })
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
       }
    }, [price, axios])
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

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: user?.displayName || 'unknown',
                        email: user?.email || 'anonymous',
                    },
                },
            },

        );
        if (confirmError) {
            console.log(confirmError);
            setPaymentError(confirmError.message)
        }

        console.log(paymentIntent);
        setProcessing(false)
        if (paymentIntent?.status === "succeeded") {
            const transactionId = paymentIntent.id;
            setPaymentSuccess(transactionId,)
            const paymentData = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                name: data.name,
                CoursesId: data._id
            }

            axios.post(`${import.meta.env.VITE_mainURL}/payment-history`, paymentData)
                .then(res => {
                    console.log(res.data);
                })

            axios.delete(`${import.meta.env.VITE_mainURL}/selected-class/${data._id}`)

            axios.post(`${import.meta.env.VITE_mainURL}/enrolled-data`,data)
            .then(res =>{
                console.log(res.data);
            })

            axios.patch(`${import.meta.env.VITE_mainURL}/available-student-count/${data.classId}`)
            .then(res=>{
                console.log(res);
            })
            axios.put(`${import.meta.env.VITE_mainURL}/enrolled-student-count/${data.classId}`)
            .then(res=>{
                console.log(res);
            })
        }



    };
    return (
        <div>
            <>
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
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
                        className="p-2 border border-gray-300 rounded"
                    />
                    <button
                        type="submit"
                        disabled={!stripe || !clientSecret || Processing}
                        className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Pay
                    </button>
                </form>

                {paymentError && <p className='text-red-500 text-center'>{paymentError}</p>}
                {paymentSuccess && <p className='text-green-500 text-center'>Transaction  complete with transactionId {paymentSuccess}</p>}
            </>
        </div>
    );
};

export default PayForm;