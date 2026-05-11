import React from 'react'
import { useNavigate } from 'react-router-dom'

const home = () => {
  const navigate = useNavigate()
  function handleAboutClick() {
    navigate('/about')
  }
  return (
    <div>
        <h1> This is the home page </h1>
        <button onClick={handleAboutClick}> Move to About Page </button>
    </div>
  )
}

export default home
