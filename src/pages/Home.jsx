import React from "react";
import { FaHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-center text-5xl font-bold text-gray-800">
        Discover Recipes
      </h1>

      <p className="text-gray-500 mt-2 text-center mb-10">
        Find your favourite meals and plan your day.
      </p>

      <div
        className="bg-cover bg-center rounded-2xl p-10"
        style={{
          backgroundImage: "url('https://wallpapercave.com/wp/wp3108378.jpg')",
        }}
      >
        <div className="flex justify-center">
          <div className="flex items-center bg-white p-3 rounded-lg w-full max-w-xl">
            <FaSearch />

            <input
              type="text"
              placeholder="Search recipes..."
              className="outline-none ml-3 w-full"
            />
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-5 ">
          <button className="bg-white border px-4 py-2 rounded-full hover:bg-green-500">
            All
          </button>

          <button className="bg-white border px-4 py-2 rounded-full hover:bg-green-500">
            Breakfast
          </button>

          <button className="bg-white border px-4 py-2 rounded-full hover:bg-green-500">
            Lunch
          </button>

          <button className="bg-white border px-4 py-2 rounded-full hover:bg-green-500">
            Dinner
          </button>

          <button className="bg-white border px-4 py-2 rounded-full hover:bg-green-500">
            Desserts
          </button>

          <button className="bg-white border px-4 py-2 rounded-full hover:bg-green-500">
            Snacks
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-5">Recipes</h2>

        <div className="bg-white rounded-1xl shadow-2xl border border-gray-500 hover:shadow-2xl transition w-72">
          <img
            src="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?cs=srgb&dl=pexels-enginakyurt-1438672.jpg&fm=jpg"
            alt="Pasta"
            className="w-full object-cover"
          />

          <div className="p-5">
            <h3 className="text-lg font-bold">Creamy Pasta</h3>

            <p className="text-gray-500 mt-2">Lunch</p>

            <button className="flex items-center justify-center gap-2 bg-red-500 text-white w-full mt-4 py-2 rounded-lg hover:bg-red-600">
              <FaHeart />
              Add to Favorites
            </button>

            <Link
              to="/details"
              className="block text-center bg-green-600 text-white w-full mt-3 py-2 rounded-lg hover:bg-green-700"
            >
              View Recipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
