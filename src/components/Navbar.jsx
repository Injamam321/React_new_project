import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (

        <nav className='bg-green-700 text-white py-4 md:py-8 relative '>
            <div className='container mx-auto flex justify-between items-center'>
                <h4 className="text-2xl font-bold">React Project</h4>

                {/*Mobile menu bar */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {
                            isOpen ? <IoClose /> : <FaBars />
                        }


                    </button>
                </div>

                <ul className='hidden md:flex space-x-4 md:space-x-6'>
                    <li>    <Link>Home</Link> </li>
                    <li>    <Link>Products</Link>  </li>
                    <li>    <Link>Blogs</Link>  </li>
                    <li>    <Link>Contacts</Link>   </li>
                    <li>    <Link>About</Link></li>

                </ul>


                <button className="hidden md:block"> Login </button>

                { /*Mobile menu collapse */}

                <div className="md:hidden w-full absolute bg-green-500 top-full left-0">
                    <ul className='flex flex-col items-center py-4'>
                        <li>Home</li>
                        <li>Products</li>
                        <li>Blogs</li>
                        <li>Contacts</li>
                        <li>About</li>


                        <li>
                            <button className="hidden md:block"> Login </button>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>

    )
}
