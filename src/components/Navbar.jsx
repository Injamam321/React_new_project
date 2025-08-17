import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (

        <nav className='bg-green-700 text-white py-4 md:py-8'>
            <div className='container mx-auto flex justify-between items-center'>
                <h4>React Project</h4>

                {/*Mobile menu bar */}

                <div>
                    <button onClick={toggleMenu}>
                        {
                            isOpen ? <IoClose /> : <FaBars />
                        }


                    </button>
                </div>

                <ul className='flex space-x-4 md:space-x-6'>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Blogs</li>
                    <li>Contacts</li>
                    <li>About</li>
                </ul>


                <button> Login </button>
            </div>
        </nav>

    )
}
