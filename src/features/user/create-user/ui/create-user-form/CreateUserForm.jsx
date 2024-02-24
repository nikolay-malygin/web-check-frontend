import React from 'react';
import { MIN_PASSWORD_LENGTH } from 'shared/config';
import { UiCheckBox, UiInputFloating } from 'shared/ui';
import { ButtonBar } from 'shared/ui/layouts';
import { useCreateUserForm } from '../../model/useCreateUserForm';
import CreateUserButton from '../create-user-button/CreateUserButton';

const CreateUserForm = () => {
	const { formData, handleFormChange, handleFormSubmit, isLoading } = useCreateUserForm();

	return (
		<>
			<form onSubmit={handleFormSubmit}>
				<UiInputFloating
					required
					id={'first_name'}
					name={'first_name'}
					label={'Vorname'}
					value={formData.first_name}
					onChange={handleFormChange}
				/>
				<UiInputFloating
					required
					id={'last_name'}
					name={'last_name'}
					label={'Nachname'}
					value={formData.last_name}
					onChange={handleFormChange}
				/>
				<UiInputFloating
					required
					id={'email'}
					type={'email'}
					name={'email'}
					label={'E-Mail'}
					value={formData.email}
					onChange={handleFormChange}
				/>
				<UiInputFloating
					required
					minLength={MIN_PASSWORD_LENGTH}
					id={'password'}
					type={'password'}
					name={'password'}
					label={'Vorläufiges Passwort'}
					value={formData.password}
					onChange={handleFormChange}
				/>
				<UiCheckBox
					id={'is_admin'}
					name={'is_admin'}
					label={'Administrator'}
					checked={formData.is_admin}
					onChange={handleFormChange}
				/>
				<ButtonBar>
					<CreateUserButton isLoading={isLoading} />
				</ButtonBar>
			</form>
		</>
	);
};

export default CreateUserForm;
