import { useUserData } from 'entities/user/lib/hooks';
import { getAccessToken } from 'shared/lib/helpers';
import { useAlerts, useForm } from 'shared/lib/hooks';
import { useChangePasswordMutation } from '../api/queries';
import { initialFormState } from './initial-form-state';

export const useChangePasswordForm = () => {
	const changePasswordMutation = useChangePasswordMutation();
	const { formData, handleFormChange } = useForm(initialFormState);
	const { addAlert } = useAlerts();
	const { user } = useUserData();

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		if (formData.new_password !== formData.new_password_confirm) {
			addAlert(
				'Passwortänderung fehlgeschlagen',
				'Die neuen Passwörter stimmen nicht überein',
				'danger'
			);
		} else if (formData.new_password === formData.old_password) {
			addAlert(
				'Passwortänderung fehlgeschlagen',
				'Das neue Passwort muss sich vom alten unterscheiden',
				'danger'
			);
		} else {
			try {
				await changePasswordMutation.mutateAsync({
					userId: user.user_id,
					access_token: getAccessToken(),
					old_password: formData.old_password,
					new_password: formData.new_password,
				});
			} catch (error) {}
		}
	};

	return {
		formData,
		handleFormChange,
		handleFormSubmit,
		isLoading: changePasswordMutation.isLoading,
	};
};
