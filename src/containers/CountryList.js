import { Box, Button } from '@mui/material';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import CountryCard from '../components/CountryCard';
import useCountryStore, { selectFetchCountries, selectCountries, selectCountriesReady } from '../store/country';

const CountryList = () => {
    const [queryParams, setQueryParams] = useSearchParams();
    const countries = useCountryStore(selectCountries);
    const fetchCountries = useCountryStore(selectFetchCountries);
    const countriesReady = useCountryStore(selectCountriesReady);
    let page = 1;

    useEffect(() => {
        fetchCountries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!countriesReady) return;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParams, countriesReady]);

    useEffect(() => {
        const nextPage = queryParams.get('page');
        console.log(nextPage);

        //ada logic untuk ngefetch movies dengan page=2
        //ada logic untuk update statenya dengan movies berikutnya
    }, [queryParams]);

    const setSortParam = (type) => {
        queryParams.set("sort", type);
        setQueryParams(queryParams);
    }

    const setNextPage = (page) => {
        queryParams.set("page", page);
        setQueryParams(queryParams);
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 5,
        }}>
            <Box sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
                Sort by Rating
                <Button
                    variant="contained"
                    sx={{ ml: 2 }}
                    onClick={() => setSortParam("asc")}
                >
                    Asc
                </Button>
                <Button
                    variant="contained"
                    sx={{ ml: 2, mr: 2 }}
                    onClick={() => setSortParam("desc")}
                >
                    Desc
                </Button>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
                {
                    countries.map(country => (
                        <CountryCard key={country.name} country={country}></CountryCard>
                    ))
                }
            </Box>
            {/* <Button
                variant="contained"
                sx={{ ml: 2, mr: 2 }}
                onClick={() => setNextPage(page++)}
            >
                Load More
            </Button> */}
            <div>Created by orang</div>
        </Box>
    );
}

export default CountryList;
