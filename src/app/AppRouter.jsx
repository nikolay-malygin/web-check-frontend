import { useUserData } from 'entities/user/lib/hooks';
import { useTheme } from 'features/settings/change-user-settings/change-theme/hooks';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from 'shared/consts';
import { adminRoutes, authRoutes, publicRoutes } from './routes';

const AppRouter = () => {
	const { setTheme, getTheme } = useTheme();
	const { user } = useUserData();

	useEffect(() => {
		setTheme(getTheme());
	}, [getTheme()]);

	return (
		<Routes>
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} exact />
			))}
			{user.is_logged_in &&
				authRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} exact />
				))}
			{user.is_admin &&
				adminRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} exact />
				))}
			<Route path='*' element={<Navigate to={ROUTES.login} />} />
		</Routes>
	);
};

export default AppRouter;
