// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import MovieList from './components/MovieList';

import './App.css'

function App() {

  return (
    <main>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        <Hero />
        <MovieList />
      </div>
    </main>
  )
}

export default App
