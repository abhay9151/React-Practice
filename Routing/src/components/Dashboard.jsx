import React from 'react'
import { Outlet } from 'react-router-dom'

const dashboard = () => {
  return (
    <div>
        <h1> This is the dashboard page </h1>
        <Outlet />
        {/* // iska use mahut jaruri he  */}
    </div>
  )
}

export default dashboard
