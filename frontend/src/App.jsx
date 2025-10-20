import React from 'react'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetail from './pages/NoteDetail'
import { Routes, Route } from 'react-router'
import { toast } from 'react-hot-toast'
function App() {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Create" element={<CreatePage/>} />
        <Route path="/note/:id" element={<NoteDetail/>} />
      </Routes>
    </div>
  )
}

export default App
