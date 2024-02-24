import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { queryClient } from 'shared/api';
import { ROUTES } from 'shared/consts';
import { useAlerts } from 'shared/lib/hooks';
import { deleteProjectFunc } from './delete-project';

export const useDeleteProjectMutation = () => {
	const { addAlert } = useAlerts();
	const navigate = useNavigate();

	return useMutation(
		({ projectId, access_token }) => deleteProjectFunc(projectId, access_token),
		{
			onSuccess: (message) => {
				queryClient.invalidateQueries(['projects']);
				addAlert(message, '', 'success');
				navigate(ROUTES.projects);
			},
			onError: (error) => {
				addAlert('Fehler beim Löschen', error.message, 'danger');
			},
		}
	);
};
