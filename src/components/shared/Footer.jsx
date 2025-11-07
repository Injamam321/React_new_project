import React from 'react'

const Footer = () => {
    return (
        //         <div className="bg-gradient-to-r from-red-800 via-rose-700 to-pink-600
        // text-white text-2xl text-center py-6 font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
        //             © {new Date().getFullYear()} Imu’s Website — All Rights Reserved ❤️
        //         </div>


        <div className="bg-gradient-to-r from-red-900 via-rose-700 to-pink-600 
text-white text-center text-xl md:text-2xl py-6 px-4 
font-semibold tracking-wider shadow-lg 
hover:shadow-2xl hover:scale-[1.03] 
transition-all duration-500 ease-in-out border-t border-rose-400/30">

            <p className="mb-2">© {new Date().getFullYear()} Imu’s Website</p>
            <p className="text-sm text-rose-200">Built with ❤️ using React & Tailwind CSS</p>

        </div>


    )
}

export default Footer