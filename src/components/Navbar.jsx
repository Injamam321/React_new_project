import React from 'react'

export const Navbar = () => {
    return (
      
        <nav className='bg-green-700 text-white py-4 md:py-8'>
            <div className='container mx-auto flex justify-between items-center'>
                <h4>React Project</h4>

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
