import React from "react";
import { Container, Form, Row, Col, InputGroup } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({handleSelect, handleSearch}) => {
  return (
    <Container className="py-4">
      <Row className="flex justify-content-between">
        <Col lg="2">
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
            <Form.Control size="large" type="text" onChange={handleSearch}></Form.Control>
          </InputGroup>
        </Col>
        <Col lg="2">
          <Form.Control as="select" onChange={handleSelect}>
            <option value="all">All countries</option>
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </Form.Control>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
