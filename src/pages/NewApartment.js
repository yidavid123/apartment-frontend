import React, { Component } from 'react'
import {
	Button,
	Col,
	ControlLabel,
	FormGroup,
	FormControl,
	Row
} from 'react-bootstrap'

class NewApartment extends Component {
	constructor(props){
		super(props)
		this.state = {
			form: {
				street_name1: '',
				street_name2: '',
				city: '',
        state: '',
        zipcode: '',
        m_name: '',
        m_number: '',
        m_hours: '',
			}
		}
	}

	handleChange(event){
		let { form } = this.state
		form[event.target.name] = event.target.value
		this.setState({form: form})
	}

	handleSubmit(){
		let { form } = this.state
		this.props.handleNewApartment(form)
	}

	render() {
		return (
			<div style={{paddingLeft: 100}}>
				<form>
					<Row>
						<Col xs={6}>
							<FormGroup>
								<ControlLabel id="street_name1">Street Name</ControlLabel>
								<FormControl
									type="text"
									name="street_name1"
									value={this.state.form.street_name1}
									onChange={this.handleChange.bind(this)}
								/>
							</FormGroup>
						</Col>
					</Row>

         <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="street_name2">Street Name 2</ControlLabel>
              <FormControl
                type="string"
                name="street_name2"
                value={this.state.form.street_name2}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
         <Col xs={6}>
           <FormGroup>
             <ControlLabel id="city">City</ControlLabel>
             <FormControl
               type="string"
               name="city"
               value={this.state.form.city}
               onChange={this.handleChange.bind(this)}
             />
           </FormGroup>
         </Col>
       </Row>

       <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel id="state">State</ControlLabel>
            <FormControl
              type="string"
              name="state"
              value={this.state.form.state}
              onChange={this.handleChange.bind(this)}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
       <Col xs={6}>
         <FormGroup>
           <ControlLabel id="zipcode">Zipcode</ControlLabel>
           <FormControl
             type="string"
             name="zipcode"
             value={this.state.form.zipcode}
             onChange={this.handleChange.bind(this)}
           />
         </FormGroup>
       </Col>
     </Row>

     <Row>
      <Col xs={6}>
        <FormGroup>
          <ControlLabel id="country">Country</ControlLabel>
          <FormControl
            type="string"
            name="country"
            value={this.state.form.country}
            onChange={this.handleChange.bind(this)}
          />
        </FormGroup>
      </Col>
    </Row>

    <Row>
     <Col xs={6}>
       <FormGroup>
         <ControlLabel id="m_name">Manager Name </ControlLabel>
         <FormControl
           type="string"
           name="m_name"
           value={this.state.form.m_name}
           onChange={this.handleChange.bind(this)}
         />
       </FormGroup>
     </Col>
   </Row>

   <Row>
    <Col xs={6}>
      <FormGroup>
        <ControlLabel id="m_number">Phone Number</ControlLabel>
        <FormControl
          type="string"
          name="m_number"
          value={this.state.form.m_number}
          onChange={this.handleChange.bind(this)}
        />
      </FormGroup>
    </Col>
  </Row>

  <Row>
   <Col xs={6}>
     <FormGroup>
       <ControlLabel id="m_hour">Hours</ControlLabel>
       <FormControl
         type="string"
         name="m_hour"
         value={this.state.form.m_hour}
         onChange={this.handleChange.bind(this)}
       />
     </FormGroup>
   </Col>
 </Row>


					<Row>
						<Col xs={6}>
							<Button id="submit" onClick={this.handleSubmit.bind(this)}>
								Create Apartment Profile
							</Button>
						</Col>
					</Row>

				</form>
			</div>
		);
	}
}

export default NewApartment;
