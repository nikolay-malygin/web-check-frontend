import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { queryClient } from 'shared/api';
import { ROUTES } from 'shared/consts';
import { useAlerts } from 'shared/lib/hooks';
import { deleteUserFunc } from './delete-user';

export const useDeleteUserMutation = () => {
	const { addAlert } = useAlerts();
	const navigate = useNavigate();

	return useMutation(({ userId, access_token }) => deleteUserFunc(userId, access_token), {
		onSuccess: (message) => {
			queryClient.invalidateQueries(['users']);
			addAlert(message, '', 'success');
			navigate(ROUTES.users);
		},
		onError: (error) => {
			addAlert('Fehler beim Löschen', error.message, 'danger');
		},
	});
};
