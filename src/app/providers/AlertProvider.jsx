import React, { useState } from 'react';
import { AlertContext } from 'shared/lib/contexts';

export const AlertProvider = ({ children }) => {
	const [alerts, setAlerts] = useState([]);

	const addAlert = (title, body = '', type = 'info') => {
		const id = generateRandomId();
		const newAlert = {
			id: id,
			title,
			body,
			type,
		};

		setAlerts((prevAlerts) => [...prevAlerts, newAlert]);

		setTimeout(() => {
			removeAlert(id);
		}, 5000);
	};

	const removeAlert = (id) => {
		setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
	};

	const getAlerts = () => [...alerts];

	const generateRandomId = () => {
		return (
			Math.random().toString(36).substring(2, 15) +
			Math.random().toString(36).substring(2, 15)
		);
	};

	return (
		<AlertContext.Provider value={{ addAlert, removeAlert, getAlerts }}>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertProvider;
