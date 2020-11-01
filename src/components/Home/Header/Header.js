import React from 'react';
import './Header.css';
import { NavLink} from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
      <Navbar bg="" expand="lg">
        <NavLink to="/home"
          activeStyle={{ border: 'none' }}
        >
          <h4 style={{ color: 'black' }}>Fahim Ahmed</h4>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

            <NavLink to="/home"
              className="nav-link mr-4"
              activeStyle={{
                fontWeight: "bold",
                paddingBottom: '0px',
                borderBottom: '3px solid black',
                textDecoration: 'none',
                color: '#111430'
              }}>
              Home
                        </NavLink>
            <NavLink to="/project"
              className="nav-link mr-4"
              activeStyle={{
                fontWeight: "bold",
                paddingBottom: '0px',
                borderBottom: '3px solid black',
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
                borderBottom: '3px solid black',
                textDecoration: 'none',
                color: 'black'
              }}>
              Blog Posts
                        </NavLink>
            <NavLink to="/about"
              className="nav-link mr-4"
              activeStyle={{
                fontWeight: "bold",
                paddingBottom: '0px',
                borderBottom: '3px solid black',
                textDecoration: 'none',
                color: '#111430'
              }}>
              About
                        </NavLink>
            <a href='https://drive.google.com/file/d/1WhXuT38IyRYp24IpNw_ROSCCL6WN2Exz/view' target="_blank" rel="noopener noreferrer" download>
              <Button className="message mb-2 mr-2">
                <i className="fas fa-download" />
                            Resume
                        </Button>
            </a>

          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;