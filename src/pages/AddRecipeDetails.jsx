import React from "react";
import { Link } from "react-router-dom";

function RecipeDetails() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">
        <img
          src="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?cs=srgb&dl=pexels-enginakyurt-1438672.jpg&fm=jpg"
          alt="Pasta"
          className="w-full h-64 object-cover rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-5">Creamy Pasta</h1>

        <p className="text-gray-500 mt-2">Category: Lunch</p>

        <h2 className="text-xl font-bold mt-5">Ingredients</h2>

        <p className="mt-2">Pasta, Cream, Cheese, Garlic, Salt</p>

        <h2 className="text-xl font-bold mt-5">Preparation</h2>

        <p className="mt-2">
          Boil the pasta. Cook garlic in a pan. Add cream and cheese. Mix the
          pasta and cook for a few minutes.
        </p>

        <div className="flex gap-3 mt-6">
          <button className="bg-blue-600 text-white px-5 py-2 rounded">
            Edit
          </button>

          <button className="bg-red-500 text-white px-5 py-2 rounded">
            Delete
          </button>
        </div>

        <Link to="/" className="block mt-5 text-green-700">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetails;
