import React from 'react'
import { Link } from 'react-router'

const GameCardGood = ({ game }) => {
    return (
        <Link className='card bg-base-100 mb-6 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-accent'>
            <div className='card-body flex justify-between'>
                <div className='flex items-stretch justify-between'>
                    <h1 className='card-title text-neutral font-bold'>{game.title}</h1>
                    <div className='flex items-center justify-between'>
                        <button className='btn  btn-square px-7 mr-3 btn-sm'>
                            <h2 className=' font-bold'> Edit </h2>
                        </button>
                        <button className='btn btn-circle btn-neutral btn-sm'>
                            <h2 className=' font-bold'> X </h2>
                        </button>
                    </div>
                </div>
                <p className='text-base-content'>{game.content} </p>
            </div>

        </Link >
    )
}

export default GameCardGood