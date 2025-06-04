import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate, useParams } from 'react-router'
import api from '../lib/axios';

const GameDetailPage = () => {

    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const { id } = useParams();

    const Navigation = useNavigate();

    const handleSave = async (e) => {
        e.preventDefault();
        if (!game.title.trim() || !game.content.trim()) {
            toast.error("Please provide a title and review");
            return;
        }

        setSaving(true);

        try {
            await api.put(`/games/${game._id}`, game);
            toast.success("Saved successfully");
            Navigation("/");
        } catch (error) {
            toast.error("Could not save review");
            console.log("Could not save review in gameDetailPage", error);
        } finally {
            setSaving(false);
        }

    }

    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            await api.delete(`/games/${game._id}`);
            Navigation("/");
        } catch (error) {
            toast.error("Error deleting review");
            console.log("Error deleting game in gameDetailPage", error);
        }
    }

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const res = await api.get(`/games/${id}`);
                setGame(res.data);
            } catch (error) {
                toast.error("Error retrieving review")
                console.log("Error in fetching note in game detail page", error);
            } finally {
                setLoading(false);
            }
        };
        fetchGame();
    }, [id]);


    if (loading) {
        return (
            <div className='min-h-screen bg-base-300 flex items-center justify-center'>
                <h3>Loading</h3>
            </div>
        )
    }

    return (
        <div className='min-h-full bg-base-100'>
            <div className='container mx-auto'>
                <div className='max-w-2xl mx-auto'>
                    <Link to={"/"} className='btn btn-primary mt-6 mb-6'>
                        <span> Back </span>
                    </Link>
                    <div className='card bg-info'>
                        <div className='card-body flex text-start justify-start'>
                            <div className='mx-auto'>
                                <h3 className='card-title text-primary' > Edit Review </h3>
                            </div>
                            <form className='form'>
                                <div className='form-control '>
                                    <label className='label'>
                                        <span className='label-title text-primary'> Title</span>
                                    </label>
                                    <input type="text"
                                        placeholder={game.title}
                                        value={game.title}
                                        className='input text-neutral'
                                        onChange={(e) => setGame({ ...game, title: e.target.value })}
                                    />
                                </div>
                                <div className='form-control'>
                                    <label className='label'>
                                        <span className='label-title text-primary'> Content</span>
                                    </label>
                                    <textarea
                                        placeholder={game.content}
                                        value={game.content}
                                        className='textarea h-32 text-neutral text-base'
                                        onChange={(e) => setGame({ ...game, content: e.target.value })}
                                    />
                                </div>
                                <div className='flex justify-start'>
                                    <label className='label'>
                                        <span className='label-title text-primary'> Recommend</span>
                                    </label>
                                    <input
                                        checked={game.wouldRecommend}
                                        type='checkbox'
                                        className='checkbox checkbox-xs bg-base-100 mt-3'
                                        onChange={(e) => setGame({ ...game, wouldRecommend: e.target.checked })}
                                    />
                                </div>
                                <div className='flex justify-end text-end'>
                                    <div>
                                        <button onClick={(e) => handleSave(e)} className='btn text-error'>
                                            {saving ? "Saving..." : "Save"}
                                        </button>
                                        <button onClick={(e) => handleDelete(e)} className='btn btn-error ml-4 text-base-200'>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameDetailPage