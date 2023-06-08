import React from 'react';
import { FaGoogle } from 'react-icons/fa';
const GoogleLoginBtn = () => {
    const handelGoogleLogin = () =>{
        console.log('siddik');
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