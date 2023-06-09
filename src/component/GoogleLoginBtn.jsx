import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
const GoogleLoginBtn = () => {
    const {signInWithGoogle} = useContext(AuthContext)
    const handelGoogleLogin = () =>{
        signInWithGoogle()
        .then(res => {
            const saveUser = {name:res.user.displayName,email:res.user.email}
            axios.post(`${import.meta.env.VITE_mainURL}/user`,saveUser)
            .then(res=>{
                console.log(res.data);
            })
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <button
            onClick={handelGoogleLogin}
                className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md flex items-center justify-center space-x-2"
            >
                <FaGoogle size={20} />
                <span>Sign In with Google</span>
            </button>
        </div>
    );
};

export default GoogleLoginBtn;