import React from 'react';
import styles from './UiSelectMenu.module.css';

const UiSelectMenu = ({ id, label, options, classes, ...props }) => {
	return (
		<>
			{label && (
				<label htmlFor={id} className='color-header fw-semibold'>
					{label}
				</label>
			)}
			<select
				{...props}
				id={id}
				className={`form-select form-select-lg mb-3 ${styles.select} ${
					classes ? classes : 'background-primary border-tertiary'
				}`}>
				{options.map(({ value, name }) => (
					<option key={value} value={value}>
						{name}
					</option>
				))}
			</select>
		</>
	);
};

export default UiSelectMenu;
