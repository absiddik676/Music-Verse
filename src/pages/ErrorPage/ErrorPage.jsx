import React, { useEffect, useRef } from 'react';
import animationData from '../../assets/img/80698-404-error.json';
import lottie from 'lottie-web';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
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
        <div className='flex h-screen justify-center items-center'>
             <div className='w-1/4 text-center'>
             <LottieAnimation />
             <Link to='/'><button className="btn btn-outline btn-secondary">Back to home</button></Link>
             </div>
        </div>
    );
};

export default ErrorPage;