import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/consts';
import { useAlerts } from 'shared/lib/hooks';
import { editUserFunc } from './edit-user';

const useEditUserMutation = () => {
	const { addAlert } = useAlerts();
	const navigate = useNavigate();

	return useMutation(
		({ userId, userData, access_token }) => editUserFunc(userId, userData, access_token),
		{
			retry: 0,
			onSuccess: (message) => {
				addAlert(message, '', 'success');
				navigate(ROUTES.users);
			},
			onError: (error) => {
				addAlert('Fehler beim Bearbeiten', error.message, 'danger');
			},
		}
	);
};

export default useEditUserMutation;
