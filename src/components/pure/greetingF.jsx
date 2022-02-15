import React, {useState} from 'react';
import PropTypes from 'prop-types';


const Greetingf = (props) => {
	// Breve introducción a useState
	const [age, setage] = useState(29);

	const birthday = () => {
		//actualizar State
		setage(age + 1);
	}

	return (
		<div>
				<h1>¡Hi { props.name } desde Component Funcional!</h1>
				<h2>
					Your age is: {age}
				</h2>

				<div>
					<button onClick={birthday}>Turning age</button>
				</div>
		</div>
	);
};


Greetingf.propTypes = {
	name: PropTypes.string
};


export default Greetingf;
