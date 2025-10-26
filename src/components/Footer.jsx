import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-red-800 via-rose-700 to-pink-600 
text-white text-2xl text-center py-6 font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            © {new Date().getFullYear()} Imu’s Website — All Rights Reserved ❤️
        </div>

    )
}

export default Footer