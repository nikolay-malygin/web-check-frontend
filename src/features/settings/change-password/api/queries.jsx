import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/consts';
import { useAlerts } from 'shared/lib/hooks';
import { changePasswordFunc } from './change-password';

export const useChangePasswordMutation = () => {
	const { addAlert } = useAlerts();
	const navigate = useNavigate();

	return useMutation(
		({ userId, access_token, old_password, new_password }) =>
			changePasswordFunc(userId, access_token, old_password, new_password),
		{
			onSuccess: (message) => {
				addAlert(message, '', 'success');
				navigate(ROUTES.welcome);
			},
			onError: (error) => {
				addAlert('Fehler bei Passwortänderung', error.message, 'danger');
			},
		}
	);
};
