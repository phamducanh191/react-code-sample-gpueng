import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export default function Button({
	text,
	className = null,
	onClick,
	disabled = false
}) {
	const btnClassNames = ['btn'];

	if (className) {
		btnClassNames.push(className);
	}

	return (
		<button
			className={btnClassNames.join(' ')}
			onClick={disabled ? () => null : onClick}
			disabled={disabled}
		>
			{text}
		</button>
	);
}

Button.propTypes = {
	/**
	 * The button's text value
	 */
	text: PropTypes.string.isRequired,
	/**
	 * The button's styling class name(s)
	 */
	className: PropTypes.string,
	/**
	 * Event listener for button clicks
	 */
	onClick: PropTypes.func.isRequired,
	/**
	 * Sets disabled propery on the button, if true the onClick action is set to null
	 */
	disabled: PropTypes.bool
};

Button.defaultProps = {
	className: null,
	disabled: false
};