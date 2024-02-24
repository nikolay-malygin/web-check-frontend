import React from 'react';
import styles from './UiTextareaFloating.module.css';

const UiTextareaFloating = ({ id, label, classes, minHeight, maxHeight, ...props }) => {
	return (
		<div className='form-floating mb-3'>
			<textarea
				{...props}
				id={id}
				className={`form-control ${styles.textarea} ${
					classes ? classes : 'background-primary border-tertiary'
				}`}
				style={{
					minHeight: minHeight ? minHeight : '150px',
					maxHeight: maxHeight ? maxHeight : '200px',
				}}
				placeholder=''></textarea>
			<label htmlFor={id} className={`${styles.label} fw-medium`}>
				{label}
			</label>
		</div>
	);
};

export default UiTextareaFloating;
