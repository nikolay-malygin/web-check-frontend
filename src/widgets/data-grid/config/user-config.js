import { DeleteUserIcon } from 'features/user/delete-user';
import { ICONS, ROUTES } from 'shared/consts';
import { UiLinkButton } from 'shared/ui';

const userConfig = {
	columns: [
		{ key: 'first_name', label: 'Vorname' },
		{ key: 'last_name', label: 'Nachname' },
		{ key: 'email', label: 'Email' },
		{ key: 'is_admin', label: 'Admin' },
		{ key: 'is_disabled', label: 'Gesperrt' },
	],
	actions: [
		(key) => <UiLinkButton to={ROUTES.userDetail + '/' + key} icon={ICONS.edit} />,
		(key) => <DeleteUserIcon userId={key} />,
	],
};

export default userConfig;
