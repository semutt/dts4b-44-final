import React from 'react'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div className="flex h-full bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col w-screen">
        <NavBar />
        <HeroSection />
    </div>
</div>
  )
}

export default Home