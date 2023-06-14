import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { FiLogOut, FiLogIn } from 'react-icons/fi';
import useAdmin from '../../../hook/useAdmin';
import useInstructor from '../../../hook/useInstructor';
import useStudent from '../../../hook/useStudent';
import { AuthContext } from '../../../Provider/AuthProvider';
import ActiveRoute from '../../../Routers/ActiveRoute';
const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [isStudent, setIsStudent] = useState();
  const [navbarBg, setNavbarBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        console.log(error);
      })
  }
  useEffect(() => {
    fetch(`${import.meta.env.VITE_mainURL}/user/student/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setIsStudent(data)
      })
  }, [user])
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();

  console.log(navbarBg);
  return (
    <div className=''>
      <div className={`navbar mr-55 bg-transparent z-50 fixed ${navbarBg === true ? 'bg-gray-900 text-white' : ''}`}>
        <div className="navbar-start md:pl-20">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><ActiveRoute to='/'>Home</ActiveRoute></li>
              <li><ActiveRoute to='/instructor'>Instructors</ActiveRoute></li>
              <li><ActiveRoute to='/classes'>Classes</ActiveRoute></li>
              {
                loading ? ' ' : <>{user ? <li><Link to={`/dashboard/${isAdmin && 'ManageUser' || isInstructor && 'myClasses' || isStudent && 'selected'}`}>Dashboard </Link></li> : ''}</>
              }
               <div className='flex items-center justify-end'>
            {
              user ? <>
                <button
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
                  onClick={handleLogout}
                >
                  <FiLogOut />
                  <span>Logout</span>
                </button>
              </> : <>
                <Link to='/login'>
                  <button
                    className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"

                  >
                    <FiLogIn />
                    <span>Login</span>
                  </button>
                </Link>
              </>
            }

            {user ? <>
              <div className="avatar ml-6">
                <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-12">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </> : ''}
          </div>
            </ul>
           
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-6 menu-horizontal px-1">
            <li><ActiveRoute to='/'>Home</ActiveRoute></li>
            <li><ActiveRoute to='/instructor'>Instructors</ActiveRoute></li>
            <li><ActiveRoute to='/classes'>Classes</ActiveRoute></li>
            {
              loading ? ' ' : <>{user ? <li><ActiveRoute to={`/dashboard/${isAdmin && 'ManageUser' || isInstructor && 'myClasses' || isStudent && 'selected'}`}>Dashboard </ActiveRoute></li> : ''}</>
            }
          
          </ul>
        </div>
        <div className="navbar-end hidden md:block md:pr-20">
          <div className='flex items-center justify-end'>
            {
              user ? <>
                <button
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
                  onClick={handleLogout}
                >
                  <FiLogOut />
                  <span>Logout</span>
                </button>
              </> : <>
                <Link to='/login'>
                  <button
                    className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"

                  >
                    <FiLogIn />
                    <span>Login</span>
                  </button>
                </Link>
              </>
            }

            {user ? <>
              <div className="avatar ml-6">
                <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-12">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </> : ''}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;