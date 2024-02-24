import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/consts';
import { useAlerts } from 'shared/lib/hooks';
import { createWebCheckFunc } from './create-web-check';

export const useCreateWebCheckMutation = () => {
	const { addAlert } = useAlerts();
	const navigate = useNavigate();

	return useMutation(
		({ webCheckData, access_token }) => createWebCheckFunc(webCheckData, access_token),
		{
			onSuccess: (message) => {
				addAlert(message, '', 'success');
				navigate(ROUTES.webChecks);
			},
			onError: (error) => {
				addAlert('Fehler beim Erstellen', error.message, 'danger');
			},
		}
	);
};
