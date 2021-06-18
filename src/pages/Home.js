import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import Country from "../components/Country";
import SearchBar from "../components/SearchBar";
import { getCountries } from "../utils/api-client";

const Home = () => {
  const [region, setRegion] = React.useState("all");
  const [searchValue, setSearchValue] = React.useState('');
  const [searchedParmas] = React.useState(["capital", "name"])

  const { data: countries, isSuccess } = useQuery("GetCountries", getCountries);
  
  const search = (items) => {
    return items.filter(item => {
        if(item.region === region){
            return searchedParmas.some(param => item[param].toString().toLowerCase().indexOf(searchValue) > -1)
        }else if(region === 'all'){
            return searchedParmas.some(param => item[param].toString().toLowerCase().indexOf(searchValue) > -1)
        }
    })
  }
  
  const handleSelectRegion = async (e) => {
    setRegion(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  }

  console.log(countries);

  return (
    <>
      <SearchBar handleSelect={handleSelectRegion} handleSearch={handleSearch} />
      <Container>
        {isSuccess ? (
          <div className="card-container">
            {search(countries).map(country => <Country country={country} key={country.name} />)}
          </div>
        ) : null}
      </Container>
    </>
  );
};

export default Home;
