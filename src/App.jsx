import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import AddRecipe from './pages/AddRecipe'
import RecipeDetails from './pages/AddRecipeDetails'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/details" element={<RecipeDetails />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App




