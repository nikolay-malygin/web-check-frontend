import { DeleteWebCheckIcon } from 'features/web-check/delete-web-check';
import { ICONS, ROUTES } from 'shared/consts';
import { UiLinkButton } from 'shared/ui';

const webCheckConfig = {
	columns: [
		{ key: 'check_name', label: 'Check-Name' },
		{ key: 'check_method', label: 'Check-Methode' },
		{ key: 'is_mandatory', label: 'Obligatorisch' },
	],
	actions: [
		(key) => <UiLinkButton to={ROUTES.webCheckDetail + '/' + key} icon={ICONS.edit} />,
		(key) => <DeleteWebCheckIcon webCheckId={key} />,
	],
};

export default webCheckConfig;
