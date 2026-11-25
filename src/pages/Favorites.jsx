import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Favorites() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">

      <h1 className="text-3xl font-bold">My Favorites</h1>

      <p className="text-gray-500 mt-2">
        Your favourite recipes.
      </p>



      <div className="bg-white w-72 rounded-2xl shadow border border-gray-800 mt-8">

        <img
          src="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?cs=srgb&dl=pexels-enginakyurt-1438672.jpg&fm=jpg"
          alt="Pasta"
          className="w-full h-48 object-cover rounded-2xl"
        />

        <div className="p-4">

          <h2 className="text-lg font-bold">Creamy Pasta</h2>

          <p className="text-gray-500 mt-1">Lunch</p>



          <button className="bg-red-500 text-white w-full py-2 rounded mt-4 flex justify-center gap-2 items-center">
            <FaHeart />
            Remove from Favorites
          </button>

          <Link
            to="/details"
            className="block text-center bg-green-600 text-white py-2 rounded mt-3"
          >
            View Recipe
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Favorites