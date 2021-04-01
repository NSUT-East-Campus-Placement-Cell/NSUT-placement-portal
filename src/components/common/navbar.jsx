import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'



const NavBar = () => <Navbar bg="light" expand="lg" className='navbar-nsut' sticky="top">
    <Navbar.Brand href="/"  >
      <img
        src="/nsut_logo.png"
        className="d-inline-block align-top"
        alt="NSUT logo"
      />
    </Navbar.Brand>
    <div className='title' >
      <div style={{ fontSize: 16}}>TRAINING AND PLACEMENT</div>
      <div style={{ fontSize: 14}}>NSUT EAST CAMPUS</div>
    </div>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" style={{color: "#000", fontWeight: 500 }}>
      
        <NavLink
          exact
          to="/"
          activeStyle={{color: "#17404e"}}
          className='nav-link'
          onClick={() =>window.scrollTo(0,0)}>
          HOME
        </NavLink>
        <NavLink
          exact
          to="/about-us"
          activeStyle={{color: "#17404e"}}
          className='nav-link'
          onClick={() =>window.scrollTo(0,0)}>
          ABOUT US
        </NavLink>
        <NavLink
          exact
          to="/why-nsut"
          activeStyle={{color: "#17404e"}}
          className='nav-link'
          onClick={() =>window.scrollTo(0,0)}>
          WHY NSUT?
        </NavLink>
        <NavLink
          exact
          to="/process"
          activeStyle={{color: "#17404e"}}
          className='nav-link'
          onClick={() =>window.scrollTo(0,0)}>
          PROCESS
        </NavLink>
        <NavLink
          exact
          to="/downloads"
          activeStyle={{color: "#17404e"}}
          className='nav-link'
          onClick={() =>window.scrollTo(0,0)}>
          DOWNLOADS
        </NavLink>
        <NavLink
          exact
          to="/contact-us"
          activeStyle={{color: "#17404e"}}
          className='nav-link'
          onClick={() =>window.scrollTo(0,0)}>
          CONTACT US
        </NavLink>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>;


export default NavBar;