import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/consts';
import { useAlerts } from 'shared/lib/hooks';
import { editProjectFunc } from './edit-project';

const useEditProjectMutation = () => {
	const { addAlert } = useAlerts();
	const navigate = useNavigate();

	return useMutation(
		({ projectId, projectData, access_token }) =>
			editProjectFunc(projectId, projectData, access_token),
		{
			retry: 0,
			onSuccess: (message) => {
				addAlert(message, '', 'success');
				navigate(ROUTES.projects);
			},
			onError: (error) => {
				addAlert('Fehler beim Bearbeiten', error.message, 'danger');
			},
		}
	);
};

export default useEditProjectMutation;
