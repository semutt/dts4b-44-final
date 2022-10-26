import React, { useEffect } from 'react';
import '../asssests/css/tailwind.css'
import CountriCard from '../components/CountriCard';
import useSportmonkStore, { selectCountries, selectFetchCountries } from '../store/sportmonk';


const CountryList = () => {
  const country = useSportmonkStore(selectCountries);
  const fetchCountries = useSportmonkStore(selectFetchCountries);
  
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
        <h1 className='text-3xl font-bold flex justify-center mt-20'>Select Player Country</h1>
        <div className='flex flex-wrap justify-center mt-10 mb-10'>
            {country.map((item) => (
                <CountriCard key={item.id} item={item} />
            ))}
        </div>
    </div>
  )
}

export default CountryList;