import React from 'react';
import NavBar from './navbar';
import Footer from './footer';

const NotFound = () => {
	return (
		<div
			style={{
				minHeight: '100vh',
				display: 'flex',
				justifyContent: 'space-between',
				flexDirection: 'column',
			}}>
			<NavBar />
			<div style={{ textAlign: 'center' }}>
				<h1>404</h1>
				<h3>Page not found!</h3>
			</div>
			<Footer />
		</div>
	);
};

export default NotFound;
