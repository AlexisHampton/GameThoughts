import React from 'react'
import { Link } from 'react-router'

const GameCardBad = ({ game }) => {
    return (
        <Link className='card bg-error mb-6 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-warning'>
            <div className='card-body flex justify-between'>
                <div className='flex items-stretch justify-between'>
                    <div>
                        <h1 className='card-title text-primary font-bold'>{game.title}</h1>
                        <h4 className='text-sm text-base-300'> Not recommended</h4>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button className='btn  btn-square btn-warning px-7 mr-3 btn-sm'>
                            <h2 className=' font-bold'> Edit </h2>
                        </button>
                        <button className='btn btn-circle btn-neutral btn-sm'>
                            <h2 className=' font-bold'> X </h2>
                        </button>
                    </div>
                </div>
                <p className='text-base-200'>{game.content} </p>
            </div>

        </Link >
    )
}

export default GameCardBad