import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { queryClient } from 'shared/api';
import { ROUTES } from 'shared/consts';
import { useAlerts } from 'shared/lib/hooks';
import { deleteWebCheckFunc } from './delete-web-check';

export const useDeleteWebCheckMutation = () => {
	const { addAlert } = useAlerts();
	const navigate = useNavigate();

	return useMutation(
		({ webCheckId, access_token }) => deleteWebCheckFunc(webCheckId, access_token),
		{
			onSuccess: (message) => {
				queryClient.invalidateQueries(['webChecks']);
				addAlert(message, '', 'success');
				navigate(ROUTES.webChecks);
			},
			onError: (error) => {
				addAlert('Fehler beim Löschen', error.message, 'danger');
			},
		}
	);
};
