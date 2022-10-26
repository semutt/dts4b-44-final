import React from 'react'

const CountriCard = ({ item }) => {
  return (
    <div key={item.id} className="card w-36 bg-base-100 shadow-xl image-wrap">
        <figure><img src={item.logo_path} alt="country" /></figure>
        <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
        </div>
    </div>
  )
}

export default CountriCard