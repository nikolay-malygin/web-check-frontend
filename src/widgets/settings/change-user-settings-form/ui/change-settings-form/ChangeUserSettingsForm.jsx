import { ChangeThemeSelect, RecordNumSelect } from 'features/settings/change-user-settings';
import React from 'react';
import { ButtonBar } from 'shared/ui/layouts';
import { useChangeUserSettingsForm } from '../../model/useChangeUserSettingsForm';
import SaveUserSettingsButton from '../save-user-settings-button/SaveUserSettingsButton';

const ChangeUserSettingsForm = () => {
	const { handleFormSubmit, isLoading } = useChangeUserSettingsForm();
	return (
		<form className='mt-3' onSubmit={handleFormSubmit}>
			<RecordNumSelect />
			<ChangeThemeSelect />
			<ButtonBar>
				<SaveUserSettingsButton isLoading={isLoading} />
			</ButtonBar>
		</form>
	);
};

export default ChangeUserSettingsForm;
