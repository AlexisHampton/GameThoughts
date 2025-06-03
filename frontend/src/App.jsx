import React from 'react'
import { Route, Routes } from 'react-router'

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import GameDetailPage from './pages/GameDetailPage'

const App = () => {
  return (

    <div data-theme="sky" className='bg-base-200'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path='/gamedetail' element={<GameDetailPage />} />
      </Routes>
    </div>
  )
}

export default App