import React from 'react'

const HeroSection = () => {
    return (
        //<div className='flex flex-col bg-amber-50 items-center text-center justify-center h-[100vh]'>

        //<div className="flex flex-col items-center justify-center h-[90vh] text-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white">

        //<div className="flex flex-col items-center justify-center h-[90vh] text-center bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 text-white">

        // <div className="flex flex-col items-center justify-center h-[90vh] text-center bg-gradient-to-r from-teal-400 via-emerald-500 to-green-500 text-white">

        <div className="flex flex-col items-center justify-center h-[90vh] text-center bg-gradient-to-r from-slate-800 via-blue-800 to-sky-500 text-white">





            <h2 className='text-4xl font-bold md:text-6xl mb-4'>Wellcome to my new react website </h2>

            <p className='text-lg md:text-xl mb-4'>
                Your journey start here
            </p>

            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:from-blue-500 hover:to-green-400 transition-all duration-300 transform hover:scale-105'>
                Purchase products
            </button>
        </div >
    )
}

export default HeroSection