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
    <div className='grid grid-cols-12 gap-6'>
        {country.map((item) => (
            <CountriCard key={item.id} item={item} />
        ))}
    </div>
  )
}

export default CountryList;