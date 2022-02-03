import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import './GlobalHeader.scss'

function GlobalHeader(props) {
  return (
    <header className='global-header'>
      <div className='row'>
        <div className='col-md-12'>
          <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
            <Navbar.Brand href='#home'>Darkan</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <Link to={'/'} className='nav-link'>Home</Link>
                <Link to={'/account/create'} className='nav-link'>Create-Account</Link>
                <Link to={'/download'} className='nav-link'>Download</Link>
                <Link to={'/highscores'} className='nav-link'>Highscores</Link>
                <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
}

export default GlobalHeader;