import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <header className='bg-base-100'>
            <div className='mx-auto max-w-6xl p-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-3xl font-bold text-primary tracking-tight'>
                        GameThoughts
                    </h1>
                    <div className='flex items-center gap-4'>
                        <Link to={"/create"} className='btn btn-error'>
                            <span> New review </span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar