import React from 'react'
import '../asssests/css/tailwind.css'

const PlayersCard = ({ item }) => {
  return (
    <div className="bg-base-100 rounded-box col-span-3 row-span-3 mx-2 grid w-72 flex-shrink-0 place-items-center items-center gap-4 p-4 py-8 shadow-xl xl:mx-0 xl:w-full svelte-1n6ue57">
        <div className="dropdown">
            <div tabindex="0">
                <div className="avatar">
                    <div className="mask mask-squircle bg-base-content h-24 w-24 bg-opacity-10 p-px">
                        <img src={item.image_path} width="94" height="94" alt="Avatar Tailwind CSS Component" className="mask mask-squircle" />
                    </div>
                </div>
            </div>
        </div> 
        <div>
            <div className="dropdown w-full">
                <div tabindex="0">
                    <div className="text-center">
                        <div className="text-lg font-extrabold">{item.fullname}</div> 
                        <div className="text-base-content/70 my-3 text-sm">
                            Nationality {item.nationality}
                            <br />
                            Height {item.height}
                            <br />
                            weight {item.weight}
                        </div>
                    </div>
                </div> 
            </div> 
            <div className="dropdown w-full">
                <div tabindex="0">
                    <div className="mt-2 text-center">
                        <div className="badge badge-ghost">Design</div> 
                        <div className="badge badge-ghost">Art</div> 
                        <div className="badge badge-ghost">Illustration</div>
                    </div>
                </div> 
            </div>
        </div> 
        <div className="dropdown dropdown-top">
            <div tabindex="0">
                <div className="btn-group">
                    <button className="btn btn-accent btn-sm">Follow</button> 
                    <button aria-label="button component" className="btn btn-accent btn-square btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>
                    </button>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default PlayersCard