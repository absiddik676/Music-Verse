import React from 'react';
import { Bars } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Bars
            height="60"
            width="70"
            color="#79E0EE"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </div>
    );
};

export default Spinner;