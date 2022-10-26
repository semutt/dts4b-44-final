import React from 'react'
import poster from '../asssests/gifbg.webp';

const HeroSection = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage:`url(${poster})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">Find information on your favorite soccer players here. You can search by player name or country of origin.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection