import React from 'react';
import { Link } from 'react-router-dom';

const UiLinkButton = ({ children, to, classes, icon, ...props }) => {
	return (
		<Link to={to}>
			<button
				type='button'
				{...props}
				className={`${classes ? classes : 'background-blue color-white'} btn fw-semibold`}>
				{icon && <i className={`${icon} ${children && 'me-2'}`}></i>}
				{children}
			</button>
		</Link>
	);
};

export default UiLinkButton;
