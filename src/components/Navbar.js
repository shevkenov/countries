import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavbarBrand, Button } from "react-bootstrap";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMode } from "../context/mode-context";

function Header() {
  const { darkMode, changeMode } = useMode();

  const mode = darkMode ? "dark" : null;
  return (
    <Navbar bg={darkMode ? "dark" : null} variant={mode}>
      <Container>
        <NavbarBrand>Where in the world?</NavbarBrand>
        <NavbarBrand>
          <Button variant={mode} onClick={changeMode}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} /> {darkMode ? "Light mode" : "Dark mode"}
          </Button>
        </NavbarBrand>
      </Container>
    </Navbar>
  );
}

export default Header;
