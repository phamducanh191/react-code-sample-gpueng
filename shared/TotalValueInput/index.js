import React from 'react';
import PropTypes from 'prop-types';
import './TotalValueInput.scss';

const STEP = 0.01;
export const MIN_TOTALVALUE = 0;
export const MAX_TOTALVALUE = 9999999.99;

export default function TotalValueInput({
	id,
	className = null,
	value,
	onChange,
	label,
	placeholder,
	allowZero = false
}) {
    const fieldClassNames = ['input-pound'];

    if (className !== null) { fieldClassNames.push(className); }
		if (allowZero || value !== 0) { fieldClassNames.push('input-pound--filled'); }

		const inputValue = allowZero ? value : (value === 0 ? '' : value);

    return (
        <label className={fieldClassNames.join(' ')}>
            {allowZero || value !== 0 && <span className="label-filled">{label}</span>}
            <i/>
            <input type="number"
                id={id}
                step={STEP}
                min={MIN_TOTALVALUE}
                max={MAX_TOTALVALUE}
                value={inputValue}
                onChange={onChange}
                className="input input--border-bottom"
                placeholder={placeholder}/>
        </label>
    );
}

TotalValueInput.propTypes = {
		/**
     * Additional class name
     */
    className: PropTypes.string,
    /**
     * The total monetary value from range 0-9999999.99 (Decimal value)
     */
    value: PropTypes.number.isRequired,
    /**
     * Event listener for updating the value
     */
		onChange: PropTypes.func.isRequired,
		/**
     * Wrapping label text
     */
		label: PropTypes.string,
		/**
     * Input's placeholder text
     */
    placeholder: PropTypes.string,
		/**
     * If prop exists will allow 0 (zero) value, default to false
     */
    allowZero: PropTypes.bool
}

TotalValueInput.defaultProps = {
    className: '',
    value: '',
    onChange: () => null,
    label: '',
		placeholder: '',
		allowZero: false
}