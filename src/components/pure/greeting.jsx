import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
	constructor(props){
		super(props);
		this.state = {
			age: 29
		}
	}

	render() {
		return (
			<div>
				<h1>¡Hi { this.props.name }!</h1>
				<h2>
					Your age is: {this.state.age}
				</h2>

				<div>
					<button onClick={this.birthday}>Turning age</button>
				</div>
			</div>
		);
	}

	birthday = () => {
		this.setState((prevState) => (
			{
				age: prevState.age +1
			}
		))
	}
}


Greeting.propTypes = {
	name: PropTypes.string
};


export default Greeting;
