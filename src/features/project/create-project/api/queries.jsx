import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/consts';
import { useAlerts } from 'shared/lib/hooks';
import { createProjectFunc } from './create-project';

export const useCreateProjectMutation = () => {
	const { addAlert } = useAlerts();
	const navigate = useNavigate();

	return useMutation(({ projectData, access_token }) => createProjectFunc(projectData, access_token), {
		onSuccess: (message) => {
			addAlert(message, '', 'success');
			navigate(ROUTES.projects);
		},
		onError: (error) => {
			addAlert('Fehler beim Erstellen', error.message, 'danger');
		},
	});
};
