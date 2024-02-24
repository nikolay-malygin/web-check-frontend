import React from 'react';
import styles from './SidebarLink.module.css';
import { Link } from 'react-router-dom';

const SidebarLink = ({ to, icon, label }) => {
	return (
		<li className='nav-item rounded'>
			<Link to={to} className={`nav-link ${styles.link}`}>
				<i className={`${icon} me-2`}></i>
				{label}
			</Link>
		</li>
	);
};

export default SidebarLink;
