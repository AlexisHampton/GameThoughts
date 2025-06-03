import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import toast from "react-hot-toast";
import api from '../lib/axios';

const CreatePage = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [wouldRecommend, setWouldRecommend] = useState(false);
  const [loading, setLoading] = useState(false);

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("woild red")
    console.log("wouldRecommend", wouldRecommend);
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("Please provide a title and review");
      return;
    }
    try {
      setLoading(true);
      const newReview = await api.post("/games", { title, content, wouldRecommend });
      console.log(newReview);

      Navigate("/");

    } catch (error) {
      toast.error("Cannot add note at this time");
      console.log("Cannot create note in handleSubmit", error);
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <Link to={"/"} className='btn btn-info mb-4'> Back</Link>
          <div className='card bg-base-300'>
            <div className='card-body'>
              <div className='flex text-center mx-auto'>
                <h2 className=' card-title text-info '> Create Game Review </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text text-info font-bold'> Title </span>
                  </label>
                  <input type="text"
                    placeholder='Game Title'
                    className='input text-info placeholder-info bg-base-200'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text text-info font-bold'> Review</span>
                  </label>
                  <textarea
                    placeholder='Game Review'
                    className='textarea h-32 text-info placeholder-info bg-base-200 mb-6'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div className='form-control'>
                  <div className='flex items-start justify-start'>
                    <label className='label'>
                      <span className='label-text text-info font-bold'> Recommend? </span>
                    </label>
                    <input
                      type='checkbox'
                      className='checkbox size-5 text-info placeholder-info bg-base-200 mb-6 ml-7 mt-2'
                      value={false}
                      onChange={(e) => setWouldRecommend(e.target.checked)}
                    />
                  </div>
                </div>
                <div className='flex text-center justify-center mx-auto'>
                  <button type="submit" disabled={loading} className='btn btn-secondary'>
                    {loading ? "Creating..." : "Create Review"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage