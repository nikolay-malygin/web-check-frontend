import { useQuery } from 'react-query';
import { useAlerts } from 'shared/lib/hooks';
import { getLastProjects } from './get-last-projects';

const useLastProjectsQuery = (access_token) => {
	const { addAlert } = useAlerts();

	const { data: lastProjects, isLoading } = useQuery({
		queryKey: ['lastProjects'],
		retry: 0,
		queryFn: () => getLastProjects(access_token),
		onError: (error) => {
			addAlert(error.message, '', 'danger');
		},
	});

	return {
		lastProjects: lastProjects || [],
		isLoading,
	};
};
export default useLastProjectsQuery;
