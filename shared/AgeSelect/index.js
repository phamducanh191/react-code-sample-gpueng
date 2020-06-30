import React from 'react';
import PropTypes from 'prop-types';

export const MIN_AGE = 55;
export const MAX_AGE = 120;

/**
 * Generates an array filled with a range of numbers.
 */
const buildAgeArray = () => new Array(MAX_AGE - (MIN_AGE - 1)).fill().map((d, i) => MIN_AGE + i);

export default function AgeSelect({ id, value, onChange, label = null, placeholder, withNever = false }) {
	return (
		<label className="input-select">
			{label && (value !== 0) && <span className="label-filled">{label}</span>}
			<select id={id} className="input input--border-bottom" onChange={onChange} defaultValue={0}>
				<option value="-1" className="hidden">{placeholder}</option>
				{withNever && <option value="-1">Never</option>}
				{buildAgeArray().map((age) => <option key={age} value={age}>{age}</option>)}
			</select>
		</label>
	);
}

AgeSelect.propTypes = {
	/**
	 * The select html id
	 */
	id: PropTypes.string.isRequired,
	/**
	 * The age.
	 */
	value: PropTypes.number.isRequired,
	/**
	 * Event listener for updating the value
	 */
	onChange: PropTypes.func.isRequired,
	/**
	 * The select's label text
	 */
	label: PropTypes.string,
	/**
	 * The select placeholder text
	 */
	placeholder: PropTypes.string,
	/**
	 * Show the 'never' option as default choice
	 */
	withNever: PropTypes.bool
}

AgeSelect.defaultProps = {
	value: 0,
	onChange: () => null
}