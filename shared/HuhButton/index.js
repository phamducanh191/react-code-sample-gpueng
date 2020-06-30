import React from 'react';
import PropTypes from 'prop-types';
import './HuhButton.scss';

export default function HuhButton({ onClick }) {
	return (
		<button className="huh-button" onClick={() => null}>
			Huh?
		</button>
	);
}

HuhButton.propTypes = {
	/**
	 * Event listener for button clicks
	 */
	onClick: PropTypes.func.isRequired
};

HuhButton.defaultProps = {
	onClick: () => null
};