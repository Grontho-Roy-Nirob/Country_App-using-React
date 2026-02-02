import React, {useState,useEffect} from 'react'
import Countries from './components/CountryApp/Countries';
import Search from './components/CountryApp/Search';

const url = "https://restcountries.com/v3.1/all?fields=name,capital,region,population,area,flags";

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
        setIsLoading(false);
        setError(null);
        // console.log(data);

    } catch (error) {
        setIsLoading(false);
        setError(error);
    }
};


  useEffect(() => {
          fetchData(url)
  }, [])


  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter((country)  => country.name.common !== name);
    setFilteredCountries(filter)
  };


  const handleSearch = (searchValue) => {
    const value = searchValue.toLowerCase();

    const newCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(value)
    );

    setFilteredCountries(newCountries);
  };

  return (
    <div>
      <h1 style={{textAlign: "center",fontSize: "2.2rem",fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontWeight: "700",
                  color: "#ffffff",backgroundColor: "#4f46e5",border: "2px solid #4f46e5",borderRadius: "12px",padding: "14px 30px",
                  margin: "20px auto",display: "table",boxShadow: "0 6px 20px rgba(0,0,0,0.2)"
                }}>
               Country App
     </h1>
      <Search onSearch={handleSearch}/>
      {isLoading && <h2>Loading ... </h2>}
      {error && <h2>{error.message} </h2>}
      {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry}/>}
    </div>
  )
}

export default App
