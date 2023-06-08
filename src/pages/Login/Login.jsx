import React, { useEffect, useRef, useState } from 'react';
import animationData from '../../assets/img/29298-girl-with-a-guitar.json';
import lottie from 'lottie-web';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import GoogleLoginBtn from '../../component/GoogleLoginBtn';
import { Link } from 'react-router-dom';
const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // lottie animation
    const LottieAnimation = () => {
        const animationContainer = useRef(null);
        useEffect(() => {
            const anim = lottie.loadAnimation({
                container: animationContainer.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationData,
            });

            return () => {
                anim.destroy();
            };
        }, []);

        return <div ref={animationContainer} />;
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-1/2 lg:text-left">
                        <LottieAnimation />
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form action="">
                                <div >
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div className="relative">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="flex">
                                        <input
                                            id="password"
                                            name="password"
                                            type={passwordVisible ? 'text' : 'password'}
                                            autoComplete="current-password"
                                            required
                                            className="mt-1  block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Password"
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 top-5 pr-3 flex items-center"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {passwordVisible ? (
                                                <RiEyeOffFill className="h-5 w-5  text-gray-400" />
                                            ) : (
                                                <RiEyeFill className="h-5 w-5 text-gray-400" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p>New here? <Link to='/signUp' className='text-blue-600'>Create a New Account</Link></p>
                        </div>
                        <div className='flex justify-center mb-6'>
                            <GoogleLoginBtn />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;