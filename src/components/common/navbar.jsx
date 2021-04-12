import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
	const location = useLocation();

	return (
		<Navbar bg='light' expand='lg' className='navbar-nsut' sticky='top'>
			<Navbar.Brand href='/'>
				<img
					src='/nsut_logo.png'
					className='d-inline-block align-top'
					alt='NSUT logo'
				/>
			</Navbar.Brand>
			<div className='title'>
				<div style={{ fontSize: 16 }}>TRAINING AND PLACEMENT</div>
				<div style={{ fontSize: 14 }}>NSUT EAST CAMPUS</div>
			</div>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto' style={{ color: '#000', fontWeight: 500 }}>
					<NavLink
						exact
						to='/'
						activeStyle={{ color: '#17404e' }}
						className='nav-link'
						onClick={() => window.scrollTo(0, 0)}>
						HOME
					</NavLink>
					<NavLink
						exact
						to='/about-us'
						activeStyle={{ color: '#17404e' }}
						className='nav-link'
						onClick={() => window.scrollTo(0, 0)}>
						ABOUT US
					</NavLink>
					<NavDropdown
						title='WHY NSUT?'
						className={`nav-link ${
							location.pathname.includes('why-nsut') ? 'active' : ''
						}`}
						id='whyNSUT'>
						<NavLink
							exact
							to='/why-nsut/courses-offered'
							className='dropdown-item'
							onClick={() => window.scrollTo(0, 0)}>
							COURSES OFFERED
						</NavLink>

						<NavLink
							exact
							to='/why-nsut/past-recruiters'
							className='dropdown-item'
							onClick={() => window.scrollTo(0, 0)}>
							PAST RECRUITERS
						</NavLink>

						<NavLink
							exact
							to='/why-nsut/our-alumni'
							className='dropdown-item'
							onClick={() => window.scrollTo(0, 0)}>
							OUR ALUMNI
						</NavLink>

						<NavLink
							exact
							to='/why-nsut/our-societies'
							className='dropdown-item'
							onClick={() => window.scrollTo(0, 0)}>
							OUR SOCIETIES
						</NavLink>
					</NavDropdown>

					{/* <NavLink
                exact
                to="/why-nsut"
                activeStyle={{color: "#17404e"}}
                className='nav-link'
                onClick={() =>window.scrollTo(0,0)}>
                WHY NSUT?
              </NavLink> */}
					<NavLink
						exact
						to='/process'
						activeStyle={{ color: '#17404e' }}
						className='nav-link'
						onClick={() => window.scrollTo(0, 0)}>
						PROCESS
					</NavLink>
					<NavLink
						exact
						to='/downloads'
						activeStyle={{ color: '#17404e' }}
						className='nav-link'
						onClick={() => window.scrollTo(0, 0)}>
						DOWNLOADS
					</NavLink>
					<NavDropdown
						title='TEAM'
						className={`nav-link ${
							location.pathname.includes('team') ? 'active' : ''
						}`}
						id='team'>
						<NavLink
							exact
							to='/team/administration'
							className='dropdown-item'
							onClick={() => window.scrollTo(0, 0)}>
							ADMINISTRATION
						</NavLink>

						<NavLink
							exact
							to='/team/current'
							className='dropdown-item'
							onClick={() => window.scrollTo(0, 0)}>
							CURRENT TEAM
						</NavLink>
					</NavDropdown>
					<NavLink
						exact
						to='/contact-us'
						activeStyle={{ color: '#17404e' }}
						className='nav-link'
						onClick={() => window.scrollTo(0, 0)}>
						CONTACT US
					</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
