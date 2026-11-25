import React from 'react'

function AddRecipe() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">

      <div className="bg-white max-w-xl mx-auto p-6 rounded-xl shadow">

        <h1 className="text-2xl font-bold text-center">
          Add New Recipe
        </h1>
 <form className="mt-6">

          <label>Recipe Name</label>
          <input
            type="text"
            placeholder="Enter recipe name"
            className="border w-full p-2 rounded mt-2 mb-4"
          />

          <label>Image URL</label>
          <input
            type="text"
            placeholder="Enter image URL"
            className="border w-full p-2 rounded mt-2 mb-4"
          />

          <label>Category</label>
          <select className="border w-full p-2 rounded mt-2 mb-4">
            <option>Choose Category</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Desserts</option>
            <option>Snacks</option>
          </select>

          <label>Ingredients</label>
          <textarea
            placeholder="Enter ingredients"
            className="border w-full p-2 rounded mt-2 mb-4"
          />

          <label>Preparation Instructions</label>
          <textarea
            placeholder="Enter preparation steps"
            className="border w-full p-2 rounded mt-2 mb-4"
          />

          <button
            type="button"
            className="bg-green-600 text-white w-full py-2 rounded"
          >
            Add Recipe
          </button>

        </form>

      </div>

    </div>
  )
}

export default AddRecipe