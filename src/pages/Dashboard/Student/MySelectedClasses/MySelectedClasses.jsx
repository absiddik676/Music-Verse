import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider';
import SingleSelectedClass from '../SingleSelectedClass/SingleSelectedClass';

const MySelectedClasses = () => {
    const { user, loading } = useContext(AuthContext)
    const { data: myClasses = [], refetch } = useQuery({
        queryKey: ['selectedClass'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/selected-class/${user?.email}`)
            return res.data
        }
    })
    console.log(myClasses);
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-3'>MySelectedClasses</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    myClasses.map(myClass => <SingleSelectedClass key={myClass._id} refetch={refetch} myClass={myClass}></SingleSelectedClass>)
                }
            </div>
        </div>
    );
};

export default MySelectedClasses;