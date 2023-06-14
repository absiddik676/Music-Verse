import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
const ManageClasses = () => {
    const { addToast, toastStack } = useToasts();
    const [feedbackDataId, setFeedbackDataId] = useState('');
    const [close,setClose] = useState(false)
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_mainURL}/classes`)
            return res.data
        }
    })

    const handleApproveClass = async (id) => {
        console.log(id);
        const res = await axios.patch(`${import.meta.env.VITE_mainURL}/approve-class/${id}`)
        console.log(res.data.result);
        if (res.data.result.modifiedCount > 0) {
            refetch()
            addToast(`${res.data.message} `, { appearance: 'success', autoDismiss: true, });
        }
    }

    const handelDenyClasses = async (id) => {
        console.log(id);
        const res = await axios.patch(`${import.meta.env.VITE_mainURL}/denied-class/${id}`)
        console.log(res.data.result);
        if (res.data.result.modifiedCount > 0) {
            refetch()
            addToast(`${res.data.message} `, { appearance: 'success', autoDismiss: true, });
        }
    }

    const openModal = (id) => {
        window.my_modal_1.showModal(feedbackDataId);
        setFeedbackDataId(id)
        
    };

    const handleSendFeedback = (event) => {
        const data = event.target.text.value;
        console.log(feedbackDataId,data);
        if(close === true){
            return
        }
        axios.put(`${import.meta.env.VITE_mainURL}/feedback/${feedbackDataId}`,{data})
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                addToast(`Feedback sended `, { appearance: 'success', autoDismiss: true, });
            }
        })
        
    };

    return (
        <div>
            <div className='flex justify-between mx-4'>
                <h1 className='text-3xl font-semibold text-center my-4'>Manage all classes</h1>
                <h1 className='text-3xl font-semibold text-center my-4'>Total classes: {classes.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr>
                                <th>Class Image</th>
                                <th>Class name</th>
                                <th> Instructor name</th>
                                <th>Instructor email</th>
                                <th>Available seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map(singleClass => <tr key={singleClass._id}>
                                    {console.log(singleClass?.status === 'approve')}
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={singleClass?.imgURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {singleClass?.className}
                                    </td>
                                    <td>{singleClass?.InstructorName}</td>
                                    <th>
                                        {singleClass?.InstructorEmail}
                                    </th>
                                    <th>
                                        {singleClass?.AvailableSeats}
                                    </th>
                                    <th>
                                        ${singleClass?.price}
                                    </th>
                                    <th>
                                        {singleClass?.status}
                                    </th>
                                    <th>
                                        <button onClick={() => handleApproveClass(singleClass._id)} className={`bg-green-500  hover:bg-green-600 text-white font-bold py-2 px-2 rounded ${singleClass.status === 'approve' || singleClass.status === 'denied' ? 'btn-disabled cursor-not-allowed bg-green-400' : ''}`}>
                                            Approve
                                        </button>
                                    </th>
                                    <th>
                                        <button onClick={() => handelDenyClasses(singleClass._id)} className={`bg-red-500 ${singleClass.status === 'approve' || singleClass.status === 'denied' ? 'btn-disabled cursor-not-allowed bg-red-400' : ''} hover:bg-red-600 text-white font-bold py-2 px-2 rounded`}>
                                            Deny
                                        </button>
                                    </th>
                                    <th>
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded" onClick={()=>openModal(singleClass._id)}>
                                            Feedback
                                        </button>

                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
            {/* Open the modal using ID.showModal() method */}

            <dialog id="my_modal_1" className="modal">
                <form onSubmit={handleSendFeedback} method="dialog" className="modal-box relative">
                    <h3 className="font-bold text-lg mb-2">Feedback!</h3>
                    <textarea rows={'4'} cols={'62'} id='text' className="textarea  resize-none textarea-info " placeholder="Bio"></textarea>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={()=>setClose(false)} type='submit' className="btn">Send</button>
                    </div>
                    <button onClick={()=>setClose(true)} className=" absolute right-2 top-2">✕</button>
                </form>
            </dialog>
        </div>
    );
};

export default ManageClasses;