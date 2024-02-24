import React from 'react';
import { ICONS, ROUTES } from 'shared/consts';
import { UiLinkButton } from 'shared/ui';

const LinkToWebCheckForm = () => {
	return (
		<div className='d-flex justify-content-end mb-4'>
			<UiLinkButton
				to={ROUTES.createWebCheck}
				icon={ICONS.plus}
				classes={'background-green color-white px-4 py-2'}>
				Website-Prüfung erstellen
			</UiLinkButton>
		</div>
	);
};

export default LinkToWebCheckForm;
