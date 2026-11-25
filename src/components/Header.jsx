import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaUtensils } from 'react-icons/fa'

function Header() {
  return (
    <div className="flex justify-between items-center p-5 bg-gray-300 shadow">

      <Link to="/" className="flex items-center gap-6 text-green-700">
        <FaUtensils  />
        <h1 className="text-4xl font-bold">Recipe Planner</h1>
      </Link>

      <div className="flex gap-5 items-center">

        <Link to="/">Home</Link>

        <Link to="/favorites" className="flex gap-2 text-red-500">
          <FaHeart />
          Favorites
        </Link>

        <Link to="/add" className="bg-green-600 text-white px-3 py-2 rounded-3xl hover:bg-red-500">
          + Add Recipe
        </Link>

      </div>

    </div>
  )
}

export default Header