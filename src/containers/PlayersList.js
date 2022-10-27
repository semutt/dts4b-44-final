import React, { useEffect } from 'react'
import '../asssests/css/tailwind.css'
import PlayersCard from '../components/PlayersCard';
import usePlayersStore, { selectFetchPlayerByCountries, selectPlayers } from '../store/player'

const PlayersList = () => {
    const player = usePlayersStore(selectPlayers);
    const fetchPlayerByCountry = usePlayersStore(selectFetchPlayerByCountries);

    useEffect(() => {
        fetchPlayerByCountry();
    }, []);
    
  return (
    <div className='flex flex-wrap justify-center mt-24 mb-10'>
        {player.map((item) => (
            <PlayersCard key={item.player_id} item={item} />
        ))}
    </div>
  )
}

export default PlayersList;