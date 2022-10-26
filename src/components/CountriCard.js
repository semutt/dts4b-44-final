import React from 'react'

const CountriCard = ({ item }) => {
  return (
    <div key={item.id} className="card w-2/12 bg-base-100 shadow-xl image-wrap mx-3 my-3">
        <button><figure><img src={item.image_path} alt="country" /></figure></button>
        <div className="card-body">
            <p className='card-title'>{item.name}</p>
        </div>
    </div>
  )
}

export default CountriCard