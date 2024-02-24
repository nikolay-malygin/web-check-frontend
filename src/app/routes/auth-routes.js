import {
	ProjectCheckPage,
	ProjectCreatePage,
	ProjectDetailPage,
	ProjectsPage,
} from 'pages/project';
import { SettingsPage } from 'pages/settings';
import { WelcomePage } from 'pages/user';
import { ROUTES } from 'shared/consts';

// Verfügbare Seiten für angemeldete BenutzerInnen, die keine Admin-Rolle haben
const authRoutes = [
	{
		path: ROUTES.welcome,
		Component: WelcomePage,
	},
	{
		path: ROUTES.projects,
		Component: ProjectsPage,
	},
	{
		path: ROUTES.projectDetail + '/:id',
		Component: ProjectDetailPage,
	},
	{
		path: ROUTES.createProject,
		Component: ProjectCreatePage,
	},
	{
		path: ROUTES.checkProject + '/:id',
		Component: ProjectCheckPage,
	},
	{
		path: ROUTES.settings,
		Component: SettingsPage,
	},
];

export default authRoutes;
