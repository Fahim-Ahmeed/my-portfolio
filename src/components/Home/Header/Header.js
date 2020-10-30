import React from 'react';
import'./Header.css';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Nav,  Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
             <Navbar bg="" expand="lg">
        <NavLink to="/home"
        activeStyle={{border:'none'}}
        >
         <h4 style={{color:'black'}}>Fahim Ahmed</h4>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

            <NavLink to="/home"
              className="nav-link mr-4"
              activeStyle={{
                fontWeight: "bold",
                paddingBottom: '0px',
                borderBottom: '3px solid #ffffff',
                textDecoration: 'none',
                color: '#111430'
              }}>
              Home
                        </NavLink>
            <NavLink to="/portfolio"
              className="nav-link mr-4"
              activeStyle={{
                fontWeight: "bold",
                paddingBottom: '0px',
                borderBottom: '3px solid #ffffff',
                textDecoration: 'none',
                color: ''
              }}>
              Project
                        </NavLink>
            <NavLink to="/blog"
              className="nav-link mr-4"
              activeStyle={{
                fontWeight: "bold",
                paddingBottom: '0px',
                borderBottom: '3px solid #ffffff',
                textDecoration: 'none',
                color: 'black'
              }}>
              Blog Posts
                        </NavLink>
            <NavLink to="/contact"
              className="nav-link mr-4"
              activeStyle={{
                fontWeight: "bold",
                paddingBottom: '0px',
                borderBottom: '3px solid #ffffff',
                textDecoration: 'none',
                color: '#111430'
              }}>
              About
                        </NavLink>
            <NavLink to="">
            <Button className="message ">Resume</Button>
    

            </NavLink>

          </Nav>

        </Navbar.Collapse>
      </Navbar>
      </Container>
    );
};

export default Header;