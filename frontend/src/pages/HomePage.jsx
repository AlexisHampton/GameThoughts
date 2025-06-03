import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useEffect } from 'react';
import api from '../lib/axios';
import toast from 'react-hot-toast';
import GameCard from '../components/GameCard';

const HomePage = () => {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await api.get("/games");
                console.log(res.data);
                setGames(res.data);
            } catch (error) {
                console.log("Error fetching game reviews", error);
                toast.error("Cannot fetch notes");
            } finally {
                setLoading(false);
            }
        }
        fetchNotes();
    }, []);

    return (
        <div className='min-h-screen'>
            <Navbar />
            <div className='max-w-7xl mx-auto p-4 mt-6'>
                {loading && <div className='text-center text-info py-10'> Loading reviews... </div>}
                {games.length > 0 &&
                    <div className='grid grid-cols-1'>
                        {games.map(game => (<GameCard key={game._id} game={game} setGames={setGames} />))}
                    </div>}
            </div>
        </div>
    )
}

export default HomePage