import axios from 'axios';
import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

const initialPlayers = [];
const api_token = 'uYSsxRW1qFBcyx8adfNijlGrJW9XkaL9lMexoMQrTplcBvMjATNrU2hY3k3y';
const base_url = 'https://soccer.sportmonks.com/api/v2.0/' 

const player_name = '';
const country_id = '2';

const usePlayersStore = create(
    persist(
        (set) => ({
            players: initialPlayers,

            fetchPlayerByCountry: async () => {
                const { data: axiosData } = await axios.get(base_url + 'countries/' + country_id + '/players?api_token=' + api_token + '&include=position,team,country');

                set(produce((state) => {
                    state.players = axiosData.data;
                }))
            },

            fetchPlayerByName: async () => {
                const { data: axiosData } = await axios.get(base_url + '/players/search/' + player_name + '?api_token=' + api_token + '&include=position,team,country');

                set(produce((state) => {
                    state.players = axiosData.data;
                }))
            },

        })
    )
)

export const selectPlayers = (state) => state.players;
export const selectFetchPlayerByCountries = (state) => state.fetchPlayerByCountry;
export const selectFetchPlayerByName = (state) => state.fetchPlayerByName;

export default usePlayersStore;