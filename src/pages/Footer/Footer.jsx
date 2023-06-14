import React, { useContext } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import bgImg from '../../assets/img/footerImg.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Footer = () => {
    const {isDarkMode} = useContext(AuthContext)
    return (

        <footer style={{ backgroundImage: `url(${bgImg})` }} className="bg-cover bg-no-repeat ">
            <div className={`bg-[#111111] ${isDarkMode?'':'bg-opacity-20'} px-2 ${isDarkMode?'text-white':''}`}>
                <div className='grid grid-cols-2 md:grid-cols-4 h-96 justify-center px-2  items-center gap-5 max-w-7xl  mx-auto'>
                    <div >
                        <h2 className='text-xl md:text-4xl font-bold  mb-3'>Contact us</h2>
                        <p className=' text-lg'><span className='flex items-center gap-2'><FaMapMarkerAlt />Franklin St, Greenpoint Ave</span></p>
                        <p className=' my-2 text-lg'><span className='flex items-center gap-2'><FaPhone />+2342 5446 67</span></p>
                        <p className=' text-lg'><span className='flex items-center gap-2'><FaClock />Monday - Friday: 8 AM - 5 PM</span></p>
                    </div>
                    <div >
                        <h2 className='text-xl md:text-4xl font-bold mb-3 '>Quick Links</h2>
                        <ul >
                            <li className=' text-md text-lg'><Link to='/'>Home</Link></li>
                            <li className=' text-md my-2 text-lg'><Link>Instructors</Link></li>
                            <li className=' text-md text-lg'><Link to='/classes'>Classes</Link></li>
                        </ul>
                    </div>
                    <div >
                        <h2 className='text-xl md:text-4xl font-bold  mb-3'>About</h2>
                        <ul>
                            <li className=' text-md text-lg'>About</li>
                            <li className=' text-md text-lg my-2'>Events</li>
                            <li className=' text-md text-lg'>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl md:text-4xl font-bold  mb-3'>Newsletter</h1>
                        <input placeholder='Your Email' className=' w-full pl-5 md:px-7 outline-none  focus:border-red-300 py-2 md:py-4 bg-transparent border border-white rounded-3xl' type="email" name="" id="" />
                        <input placeholder='Your Email' className='px-9 md:px-24 bg-white cursor-pointer mt-4 text-black focus:border-red-300 py-2 md:py-4 bg-transparent border border-white rounded-3xl' type="submit" name="" id="" />

                    </div>
                </div>
            </div> 
        </footer>

    );
};

export default Footer;