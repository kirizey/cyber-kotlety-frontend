import React from 'react';
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Header: React.FC = () => {
  return (
    <>
      <Navbar className="header">
        <div className="left-side">
          <Navbar.Brand href="#home">Cyber Kotlety</Navbar.Brand>
          <Nav className="mr-auto menu">
            <NavLink exact activeClassName="link_active" className="link" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="link_active" className="link" to="/feed">
              Feed
            </NavLink>
            <NavLink activeClassName="link_active" className="link" to="/hot-events">
              Hot Events
            </NavLink>
          </Nav>
        </div>
        <div className="middle-side">
          <Form inline>
            <FormControl type="text" placeholder="Type event, game, team..." className="mr-sm-2 search-bar" />
            <Button variant="outline-info" className="search-button">
              Search
            </Button>
          </Form>
        </div>
        <div className="right-side">
          <FontAwesomeIcon icon={faBell} className="notification-icon" />
          <Button variant="outline-info" className="create-event-btn">
            Create event
          </Button>
          <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
        </div>
      </Navbar>
    </>
  );
};

export default Header;