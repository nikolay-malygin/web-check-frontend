import React from 'react';
import styles from './UiInputFloating.module.css';

const UiInputFloating = ({ id, type, label, classes, ...props }) => {
	return (
		<div className='form-floating mb-3'>
			<input
				{...props}
				id={id}
				type={type ? type : 'text'}
				className={`form-control ${styles.inputField} ${
					classes ? classes : 'background-primary border-tertiary'
				}`}
				placeholder=''
			/>
			<label className={`${styles.label} fw-medium`} htmlFor={id}>
				{label}
			</label>
		</div>
	);
};

export default UiInputFloating;
