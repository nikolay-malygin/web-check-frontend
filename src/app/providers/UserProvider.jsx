import { checkLoginFunc } from 'features/auth';
import React, { useEffect, useState } from 'react';
import { UserContext } from 'shared/lib/contexts';
import { getAccessToken, removeAccessToken, setAccessToken } from 'shared/lib/helpers';

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({ is_logged_in: false });

	const login = (token, userData) => {
		setUser({ ...userData, is_logged_in: true });
		setAccessToken(token);
	};

	const logout = () => {
		setUser({ is_logged_in: false });
		removeAccessToken();
	};

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const data = await checkLoginFunc(getAccessToken());
				login(data.access_token, data.user);
			} catch (error) {
				logout();
			}
		};
		checkAuth();

		// const interval = setTimeout(() => {
		// 	checkAuth();
		// }, 1000 * 60 * 4);

		// return () => clearInterval(interval);
	}, []);

	return (
		<UserContext.Provider value={{ user, login, logout, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
