import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

import './GlobalHeader.scss'

const GlobalHeader = props => {
  return (
    <header className='App-header'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>
            <Link to={'/'} className='nav-link'>
              Darkan
            </Link>
          </Navbar.Brand>

          <Nav className='justify-content-end'>
            <Nav>
              <Link to={'/download'} className='nav-link'>
                Download
              </Link>
            </Nav>

            <Nav>
              <Link to={'/account/create'} className='nav-link'>
                Create-Account
              </Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default GlobalHeader;