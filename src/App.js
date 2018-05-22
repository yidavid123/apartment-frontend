import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Apartments from './pages/Apartments'
import NewApartment from './pages/NewApartment'

import Header from './components/Header'

import { getApartments,createApartment } from './api'

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
          apartments: []
      }
  }

  componentWillMount() {
      getApartments()
      .then(APIapartments => {
          this.setState({
              apartments: APIapartments
          })
      })
  }

  handleNewApartment(apartment) {
     createApartment(apartment)
    .then(successApartment => {
        console.log("SUCCESS! New apartment: ", successApartment);
    })

	}

  render() {
    return (
      <div>
				<Header />
				<Router>
					<Switch>
						<Route exact path="/apartments" render={(props) => <Apartments apartments={this.state.apartments}/>} />
						<Route path="/" render={(props) => <NewApartment handleNewApartment={this.handleNewApartment.bind(this)} />} />
					</Switch>
				</Router>
			</div>
    );
  }
}

export default App;
