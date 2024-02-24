import { DeleteUserButton } from 'features/user/delete-user';
import { UpdateUserButton } from 'features/user/edit-user';
import React from 'react';
import { MIN_PASSWORD_LENGTH } from 'shared/config';
import { UiCheckBox, UiInputFloating } from 'shared/ui';
import { ButtonBar } from 'shared/ui/layouts';
import { useEditUserForm } from '../model/useEditUserForm';

const EditUserForm = ({ userId }) => {
	const { formData, handleFormChange, handleFormSubmit, isLoading } = useEditUserForm(userId);

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
					id={'new_password'}
					type={'password'}
					name={'new_password'}
					label={'Passwort ändern'}
					minLength={MIN_PASSWORD_LENGTH}
					value={formData.new_password}
					onChange={handleFormChange}
				/>
				<UiCheckBox
					id={'is_admin'}
					name={'is_admin'}
					label={'Administrator'}
					checked={formData.is_admin}
					onChange={handleFormChange}
				/>
				<UiCheckBox
					id={'is_disabled'}
					name={'is_disabled'}
					label={'Gesperrt'}
					checked={formData.is_disabled}
					onChange={handleFormChange}
				/>
				<ButtonBar>
					<DeleteUserButton userId={userId} />
					<UpdateUserButton isLoading={isLoading} />
				</ButtonBar>
			</form>
		</>
	);
};

export default EditUserForm;
