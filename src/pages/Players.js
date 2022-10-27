import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import PlayersList from '../containers/PlayersList'

const Players = () => {
  return (
    <div className="flex h-full bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col w-screen">
            <NavBar />
            <PlayersList />
            <Footer />
        </div>
    </div>
  )
}

export default Players