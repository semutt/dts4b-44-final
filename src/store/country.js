import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import sportmonks from '../apis/sportmonks';

const initialCountries = [];

const useCountryStore = create(
    persist(
        (set) => ({
            countries: initialCountries,
            countriesReady: false,
            fetchCountries: async () => {
                try {
                    const { data } = await sportmonks.get("/countries");

                    set(produce((state) => {
                        state.countries = data.data;
                        state.countriesReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        {
            name: 'country-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectCountries = (state) => state.countries;
export const selectFetchCountries = (state) => state.fetchCountries;
export const selectCountriesReady = (state) => state.countriesReady;

export default useCountryStore;
