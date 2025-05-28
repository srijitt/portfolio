import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="sticky top-0 z-10 py-10">
            <div className="md:w-[60vw] lg:w-[80vw] mx-auto backdrop-filter backdrop-blur-lg shadow-lg rounded-lg bg-white/20  px-4">
                <div className="flex items-center justify-between w-full h-16">
                    <span className="text-xl text-white font-semibold">Logo</span>

                    <button className="flex lg:hidden focus:outline-none">
                        <CiMenuBurger className="text-2xl text-white" />
                    </button>

                    <div className="hidden lg:flex gap-8 text-gray-100">
                        <Link to="/">Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/about'>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar