import { LoginPage } from 'pages/auth';
import { ROUTES } from 'shared/consts';

// Seiten, die für nicht angemeldete BenutzerInnen verfügbar sind
const publicRoutes = [
	{
		path: ROUTES.login,
		Component: LoginPage,
	},
];

export default publicRoutes;
