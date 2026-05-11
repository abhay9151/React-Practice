import React from 'react'
import { useNavigate } from 'react-router-dom'
const about = () => {
  const navigate= useNavigate()
  function handleclick() {
    navigate('/dashboard')
  }
  return (
    <div>
      <h1> This is the about page </h1>
      <button onClick={handleclick}>Move to Dashboard</button>
    </div>
  )
}

export default about
