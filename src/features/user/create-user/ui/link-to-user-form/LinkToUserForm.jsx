import React from 'react';
import { ICONS, ROUTES } from 'shared/consts';
import { UiLinkButton } from 'shared/ui';

const LinkToUserForm = () => {
	return (
		<div className='d-flex justify-content-end mb-4'>
			<UiLinkButton
				to={ROUTES.createUser}
				icon={ICONS.plus}
				classes={'background-green color-white px-4 py-2'}>
				Benutzer erstellen
			</UiLinkButton>
		</div>
	);
};

export default LinkToUserForm;
