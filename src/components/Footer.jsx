import React from 'react'
import { Link } from 'react-router-dom'
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-800 text-white p-8 mt-10">

      <div className="text-center">

        <h2 className="text-2xl font-bold">
          Recipe Planner
        </h2>

        <p className="mt-2 text-green-100">
          Discover, create and enjoy your favourite recipes.
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/add">Add Recipe</Link>
        </div>

        <hr className="border-green-600 my-5" />

         <p className="text-sm text-green-200 flex justify-center items-center gap-1">
          <FaCopyright /> 2026 Recipe Planner. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer