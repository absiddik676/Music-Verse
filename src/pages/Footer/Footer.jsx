import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import bgImg from '../../assets/img/footerImg.jpg'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (

        <footer style={{ backgroundImage: `url(${bgImg})` }} className="bg-cover  bg-no-repeat ">
            <div className='bg-black bg-opacity-20'>
                <div className='grid grid-cols-4 h-96 jus items-center gap-5 max-w-7xl  mx-auto'>
                    <div >
                        <h2 className='text-4xl font-bold text-white mb-3'>Contact us</h2>
                        <p className='text-white text-lg'><span className='flex items-center gap-2'><FaMapMarkerAlt />Franklin St, Greenpoint Ave</span></p>
                        <p className='text-white my-2 text-lg'><span className='flex items-center gap-2'><FaPhone />+2342 5446 67</span></p>
                        <p className='text-white text-lg'><span className='flex items-center gap-2'><FaClock />Monday - Friday: 8 AM - 5 PM</span></p>
                    </div>
                    <div >
                        <h2 className='text-4xl font-bold mb-3 text-white'>Quick Links</h2>
                        <ul >
                            <li className='text-white text-md text-lg'><Link to='/'>Home</Link></li>
                            <li className='text-white text-md my-2 text-lg'><Link>Instructors</Link></li>
                            <li className='text-white text-md text-lg'><Link to='/classes'>Classes</Link></li>
                        </ul>
                    </div>
                    <div >
                        <h2 className='text-3xl font-bold text-white mb-3'>About</h2>
                        <ul>
                            <li className='text-white text-md text-lg'>About</li>
                            <li className='text-white text-md text-lg my-2'>Events</li>
                            <li className='text-white text-md text-lg'>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold text-white mb-3'>Newsletter</h1>
                        <input placeholder='Your Email' className='px-7 outline-none text-white focus:border-red-300 py-4 bg-transparent border border-white rounded-3xl' type="email" name="" id="" />
                        <input placeholder='Your Email' className='px-24 bg-white cursor-pointer mt-4 text-black focus:border-red-300 py-4 bg-transparent border border-white rounded-3xl' type="submit" name="" id="" />

                    </div>
                </div>
            </div> 
        </footer>

    );
};

export default Footer;