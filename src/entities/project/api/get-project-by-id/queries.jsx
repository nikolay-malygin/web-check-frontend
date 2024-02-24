import { useQuery } from 'react-query';
import { useAlerts } from 'shared/lib/hooks';
import { getProjectById } from './get-project-by-id';

const useProjectByIdQuery = (projectId, access_token) => {
	const { addAlert } = useAlerts();

	const { data: projectData, isLoading } = useQuery({
		queryKey: ['project', projectId],
		retry: 0,
		queryFn: () => getProjectById(projectId, access_token),
		onError: (error) => {
			addAlert(error.message, '', 'danger');
		},
	});

	return {
		projectData,
		isLoading,
	};
};

export default useProjectByIdQuery;
