import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Link } from 'react-bootstrap'

class Header extends Component {
	render() {
		return (
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#brand">Apartment Listing Service</a>
					</Navbar.Brand>
				</Navbar.Header>
      </Navbar>

		);
	}
}

export default Header;
