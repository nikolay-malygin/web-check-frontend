import React from 'react';
import { MIN_PASSWORD_LENGTH } from 'shared/config';
import { UiInputFloating } from 'shared/ui';
import { ButtonBar } from 'shared/ui/layouts';
import { useChangePasswordForm } from '../../model/useChangePasswordForm';
import ChangePasswordButton from '../change-password-button/ChangePasswordButton';

const ChangePasswordForm = () => {
	const { formData, handleFormChange, handleFormSubmit, isLoading } = useChangePasswordForm();

	return (
		<>
			<h5>Passwort ändern</h5>
			<form onSubmit={handleFormSubmit}>
				<UiInputFloating
					required
					type={'password'}
					id={'old_password'}
					name={'old_password'}
					label={'Altes Passwort'}
					value={formData.old_password}
					onChange={handleFormChange}
				/>
				<UiInputFloating
					required
					minLength={MIN_PASSWORD_LENGTH}
					type={'password'}
					id={'new_password'}
					name={'new_password'}
					label={'Neues Passwort'}
					value={formData.new_password}
					onChange={handleFormChange}
				/>
				<UiInputFloating
					required
					minLength={MIN_PASSWORD_LENGTH}
					type={'password'}
					id={'new_password_confirm'}
					name={'new_password_confirm'}
					label={'Neues Passwort bestätigen'}
					value={formData.new_password_confirm}
					onChange={handleFormChange}
				/>
				<ButtonBar>
					<ChangePasswordButton isLoading={isLoading} />
				</ButtonBar>
			</form>
		</>
	);
};

export default ChangePasswordForm;
