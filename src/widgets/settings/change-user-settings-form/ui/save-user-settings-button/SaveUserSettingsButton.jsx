import React from 'react';
import { ICONS } from 'shared/consts';
import { UiButton } from 'shared/ui';

const SaveUserSettingsButton = ({ isLoading, ...props }) => {
	return (
		<UiButton
			{...props}
			disabled={isLoading}
			type={'submit'}
			classes={'background-blue color-white px-4 py-2'}
			icon={isLoading ? ICONS.spinner : ICONS.save}>
			Speichern
		</UiButton>
	);
};

export default SaveUserSettingsButton;
