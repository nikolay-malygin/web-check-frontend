import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/consts';
import { useAlerts } from 'shared/lib/hooks';
import { editWebCheckFunc } from './edit-web-check';

const useEditWebCheckMutation = () => {
	const { addAlert } = useAlerts();
	const navigate = useNavigate();

	return useMutation(
		({ webCheckId, webCheckData, access_token }) =>
			editWebCheckFunc(webCheckId, webCheckData, access_token),
		{
			retry: 0,
			onSuccess: (message) => {
				addAlert(message, '', 'success');
				navigate(ROUTES.webChecks);
			},
			onError: (error) => {
				addAlert('Fehler beim Bearbeiten', error.message, 'danger');
			},
		}
	);
};

export default useEditWebCheckMutation;
