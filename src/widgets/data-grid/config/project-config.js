import { DeleteProjectIcon } from 'features/project/delete-project';
import { ICONS, ROUTES } from 'shared/consts';
import { UiLinkButton } from 'shared/ui';

const projectConfig = {
	columns: [
		{ key: 'project_name', label: 'Projektname' },
		{ key: 'project_url', label: 'URL' },
		{ key: 'is_permanent', label: 'Permanent' },
		{ key: 'is_finished', label: 'Abgeschlossen' },
	],
	actions: [
		(key) => <UiLinkButton to={ROUTES.projectDetail + '/' + key} icon={ICONS.edit} />,
		(key) => (
			<UiLinkButton
				classes={'background-green text-white'}
				to={ROUTES.checkProject + '/' + key}
				icon={ICONS.check}
			/>
		),
		(key) => <DeleteProjectIcon projectId={key} />,
	],
};

export default projectConfig;
