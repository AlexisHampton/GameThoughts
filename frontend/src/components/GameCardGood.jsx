import React from 'react'
import { Link } from 'react-router'

const GameCardGood = ({ game, handleDelete }) => {
    return (
        <Link to={`/game/${game._id}`} className='card bg-base-100 mb-6 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-accent'>
            <div className='card-body flex justify-between'>
                <div className='flex items-stretch justify-between'>
                    <div>
                        <h1 className='card-title text-neutral font-bold'>{game.title}</h1>
                        <h4 className='text-sm text-info font-mono'> Recommended</h4>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button className='btn  btn-square px-7 mr-3 btn-sm'>
                            <h2 className=' font-bold'> Edit </h2>
                        </button>
                        <button className='btn btn-circle btn-neutral btn-sm' onClick={(e) => handleDelete(e, game._id)}>
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