import React from 'react';
import { Navbar, NavLink, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './GlobalHeader.scss'
import logo from './logo.svg';

function GlobalHeader(props) {
  return (
    <header class='masthead row'>
      <Row>
        <Col>
          <Navbar bg="dark" expand="lg">
            <Link to={'/'}><img src={logo} class="logo masthead-brand" alt="logo" /></Link>
            <Nav class='mr-auto nav-masthead justify-content-center'>
              <Link to={'/'} class='nav-link'>Home</Link>
              <Link to={'/account/create'} class='nav-link'>Create-Account</Link>
              <Link to={'/download'} class='nav-link'>Download</Link>
              <Link to={'/highscores'} class='nav-link'>Highscores</Link>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </header>
  );
}

export default GlobalHeader;