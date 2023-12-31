import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import useAxiosSecure from '../../../../hook/useAxiosSecure';
import Spinner from '../../../../component/Spinner';
import moment from 'moment';
const PaymentHistory = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: payData = [], isLoading } = useQuery({
        queryKey: ['History'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment-history/${user?.email}`)
            return res.data
        }
    })
    console.log(payData);
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-4'>Payment history</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Courses Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>transactionId</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading ? <Spinner /> : <>
                                {
                                    payData.map((data, index) =>
                                        <tr key={data._id} >
                                            <th>{index + 1}</th>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.price}</td>
                                            <td>{data.transactionId}</td>
                                            <td>{moment(data?.date).format("yyyy-MM-D ")}</td>
                                        </tr>
                                    )
                                }
                            </>
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;