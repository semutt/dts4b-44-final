import React from 'react'
import '../asssests/css/tailwind.css'

const CountriCard = ({ item }) => {
  
  return (
    <div key={item.id} className="card smMin:w-3/4 w-1/5 bg-base-100 shadow-xl image-wrap smMin:mx-5 mx-3 my-3">
        <button><figure><img src={item.image_path} alt="country" /></figure></button>
        <div className="card-body">
            <p className='card-title'>{item.name}</p>
        </div>
    </div>
  )
}

export default CountriCard