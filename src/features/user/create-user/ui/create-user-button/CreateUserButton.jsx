import React from 'react';
import { ICONS } from 'shared/consts';
import { UiButton } from 'shared/ui';

const CreateUserButton = ({ isLoading, ...props }) => {
	return (
		<UiButton
			{...props}
			disabled={isLoading}
			type={'submit'}
			classes={'background-green color-white px-4 py-2'}
			icon={isLoading ? ICONS.spinner : ICONS.plus}>
			Erstellen
		</UiButton>
	);
};

export default CreateUserButton;
