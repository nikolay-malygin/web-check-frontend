import { ICONS, ROUTES } from 'shared/consts';

export const publicSidebarLinks = [
	{ route: ROUTES.projects, icon: ICONS.projects, label: 'Projekte' },
];

export const adminSidebarLinks = [
	{ route: ROUTES.users, icon: ICONS.users, label: 'Benutzer' },
	{ route: ROUTES.webChecks, icon: ICONS.checks, label: 'Web Checks' },
];
