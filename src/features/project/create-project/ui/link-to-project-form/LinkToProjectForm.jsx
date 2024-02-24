import React from 'react';
import { ICONS, ROUTES } from 'shared/consts';
import { UiLinkButton } from 'shared/ui';

const LinkToProjectForm = () => {
	return (
		<div className='d-flex justify-content-end mb-4'>
			<UiLinkButton
				to={ROUTES.createProject}
				icon={ICONS.plus}
				classes={'background-green color-white px-4 py-2'}>
				Projekt erstellen
			</UiLinkButton>
		</div>
	);
};

export default LinkToProjectForm;
