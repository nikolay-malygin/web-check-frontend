import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/consts';
import { useAlerts } from 'shared/lib/hooks';
import { createUserFunc } from './create-user';

export const useCreateUserMutation = () => {
	const { addAlert } = useAlerts();
	const navigate = useNavigate();

	return useMutation(({ userData, access_token }) => createUserFunc(userData, access_token), {
		onSuccess: (message) => {
			addAlert(message, '', 'success');
			navigate(ROUTES.users);
		},
		onError: (error) => {
			addAlert('Fehler beim Erstellen', error.message, 'danger');
		},
	});
};
