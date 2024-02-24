import { UserCreatePage, UserDetailPage, UsersPage } from 'pages/user';
import { WebCheckCreatePage, WebCheckDetailPage, WebChecksPage } from 'pages/web-check';
import { ROUTES } from 'shared/consts';

// Seiten für angemeldete BenutzerInnen, die die Admin-Rolle haben
const adminRoutes = [
	{
		path: ROUTES.users,
		Component: UsersPage,
	},
	{
		path: ROUTES.createUser,
		Component: UserCreatePage,
	},
	{
		path: ROUTES.userDetail + '/:id',
		Component: UserDetailPage,
	},
	{
		path: ROUTES.webChecks,
		Component: WebChecksPage,
	},
	{
		path: ROUTES.webCheckDetail + '/:id',
		Component: WebCheckDetailPage,
	},
	{
		path: ROUTES.createWebCheck,
		Component: WebCheckCreatePage,
	},
];

export default adminRoutes;
