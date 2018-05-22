import React, { Component } from 'react'
import {
	Grid, Col, Row, ListGroup, ListGroupItem
} from 'react-bootstrap'

class Apartments extends Component {

	render() {
		console.log(this.props.apartments);
		let apartments = this.props.apartments.map((apartment, index) => {
			return (
				<ListGroupItem key={index}
					header = {
						<h4>
							<span className='apartment-street-name1'>
								{apartment.street_name1}
							</span>
              <span className='apartment-street-name2'>
								{apartment.street_name2}
							</span>
              <span className='apartment-city'>
                {apartment.city}
              </span>
              <span className='apartment-state'>
                {apartment.state}
              </span>
              <span className='apartment-zipcode'>
                {apartment.zipcode}
              </span>
              <span className='apartment-country'>
                {apartment.country}
              </span>
              <span className='apartment-manager-name'>
                {apartment.m_name}
              </span>
              <span className='apartment-manager-number'>
                {apartment.m_number}
              </span>
              <span className='apartment-manager-hours'>
                {apartment.m_hours}
                </span>
						</h4>
					}>
				</ListGroupItem>
			)
		})
		return (
			<ListGroup>
				{apartments}
			</ListGroup>
		);
	}
}

export default Apartments;
