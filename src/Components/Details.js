import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import './Details.css';
const Details = () => {
    const [data, setdata] = useState();
    const getData = async () => {
        const response = await axios.get(
          "https://restcountries.eu/rest/v2/name/Belgium"
        ); 
        setdata(response.data);
      };
      
useEffect(()=>{
 getData(); 
},[])


return (
  <div>
    
    {data ? (
      data.map((elem) => (
        <div className='hello'>
         <div className='flag'><img src={elem.flag} alt="flag" /></div> 
         <div className='pp'>
           <h1>Native Name:  {elem.nativeName}</h1>
            <h1>Population:  {elem.population}</h1>
            <h1>Region:  {elem.region}</h1>
            <h1>Sub Region:  {elem.subregion}</h1>
             <h1>Capital:  {elem.capital}</h1>

          </div> 
           <div className='zz'> 
             <h1> Top Level Domain :  {elem.topLevelDomain}</h1>
           <h1> Currencies:   {elem.currencies.name}</h1>
           <h1>Lanhuages: {elem.languages.name}</h1>
             </div>
           
        </div>
      ))
    ) : (
      <button onClick={getData}>get</button>
    )}
  </div>
);
};

export default Details
