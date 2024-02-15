import React from 'react'
import { Outlet } from 'react-router-dom'

const GetTodosOutlet = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default GetTodosOutlet