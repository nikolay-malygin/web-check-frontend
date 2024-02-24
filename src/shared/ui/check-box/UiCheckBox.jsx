import React from 'react';
import styles from './UiCheckBox.module.css';

const UiCheckBox = ({ id, label, classes, ...props }) => {
	return (
		<div className='form-check mb-2'>
			<input
				{...props}
				id={id}
				type='checkbox'
				value=''
				className={`form-check-input ${styles.checkbox} ${
					classes ? classes : 'background-primary border-tertiary'
				}`}
			/>
			<label className={`form-check-label ${styles.label}`} htmlFor={id}>
				{label}
			</label>
		</div>
	);
};

export default UiCheckBox;
