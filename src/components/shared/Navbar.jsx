import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/')
    const location = useLocation();

    useEffect(() => {

        setActiveLink(location.pathname || '/')
    }, [location.pathname]);



    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleLinkClick = (path) => {
        setActiveLink(path);

    }

    return (

        <nav className='bg-black/60 text-white py-4 md:py-8 fixed w-full top-0'>
            <div className='container mx-auto flex justify-between items-center'>
                <h4 className="text-2xl font-bold">React Project</h4>

                {/*Mobile menu bar */}
                <div className="md:hidden ml-auto">
                    <button onClick={toggleMenu}>
                        {
                            isOpen ? <IoMdClose /> : <FaBars />
                        }


                    </button>
                </div>

                <ul className='hidden md:flex space-x-4 md:space-x-6'>

                    <li>
                        <Link
                            to="/"
                            onClick={() => handleLinkClick('/')}
                            className={activeLink === '/' ? 'text-green-300' : 'hover:text-red-900'}
                        >
                            Home
                        </Link>

                    </li>

                    <li>
                        <Link to={'/products'}
                            onClick={() => handleLinkClick('/products')}
                            className={activeLink === '/products' ? 'text-green-300' : 'hover:text-red-900'}
                        >
                            products
                        </Link>

                    </li>

                    <li>
                        <Link to={'/blogs'}
                            onClick={() => handleLinkClick('/blogs')}
                            className={activeLink === '/blogs' ? 'text-green-300' : 'hover:text-red-900'}

                        >

                            Blogs

                        </Link>

                    </li>



                    <li>
                        <Link to={'/contact'}
                            onClick={() => handleLinkClick('/contact')}
                            className={activeLink === '/contact' ? 'text-green-300' : "hover:text-red-900"}
                        >
                            Contacts

                        </Link>

                    </li>

                    <li>
                        <Link to={'/about'}
                            onClick={() => handleLinkClick('/about')}
                            className={activeLink === '/about' ? 'text-green-300' : "hover:text-red-900"}
                        >
                            about
                        </Link>
                    </li>

                </ul>

                <Link to={'/login'} >

                    <button className="hidden md:block  text-black bg-white px-4 py-1 rounded cursor-pointer hover:bg-slate-400" > Login </button>

                </Link>






                { /*Mobile menu collapse */}

                <div className="md:hidden w-full absolute bg-green-950/50 top-full left-0 ${isOpen ? 'block : hidden'">


                    <ul className='flex flex-col items-center py-4 space-y-4'>
                        <li className="hover:text-red-900">Home</li>
                        <li className="hover:text-red-900">Products</li>
                        <li className="hover:text-red-900">Blogs</li>
                        <li className="hover:text-red-900">Contacts</li>
                        <li className="hover:text-red-900">About</li>


                        <li>
                            <button className="text-black bg-white px-4 py-1 rounded cursor-pointer hover:bg-slate-400"> Login </button>
                        </li>
                    </ul>

                </div>

            </div>
        </nav >

    )
}
