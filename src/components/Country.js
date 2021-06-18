import React from "react";
import Card from "react-bootstrap/Card";
import { formatNumber } from "../utils/formatNumber";

const Country = ({ country }) => {
  
  return (
    <Card>
      <Card.Img variant="top" src={country.flag} className="card-image" />
        <Card.Header>
          <Card.Title style={{whiteSpace: "nowrap", overflow: "hidden"}}>{country.name}</Card.Title>
        </Card.Header>
      <Card.Body>
        <Card.Text>Capital: {country.capital}</Card.Text>
        <Card.Text>Region: {country.region}</Card.Text>
        <Card.Text>Population: {formatNumber(country.population)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Country;
