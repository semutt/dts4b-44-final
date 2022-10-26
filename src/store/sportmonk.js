import axios from 'axios';
import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

const initialCountries = [];
const api_token = 'uYSsxRW1qFBcyx8adfNijlGrJW9XkaL9lMexoMQrTplcBvMjATNrU2hY3k3y';

const useSportmonkStore = create(
    persist(
        (set) => ({
            country: initialCountries,
            fetchCountry: async () => {
                const { data: axiosData } = await axios.get('https://soccer.sportmonks.com/api/v2.0/leagues?api_token=' + api_token);

                set(produce((state) => {
                    state.country = axiosData.data;
                }))
            }
        })
    )
)

export const selectCountries = (state) => state.country;
export const selectFetchCountries = (state) => state.fetchCountry;

export default useSportmonkStore;