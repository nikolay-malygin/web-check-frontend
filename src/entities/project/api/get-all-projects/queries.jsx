import { useQuery } from 'react-query';
import { useAlerts } from 'shared/lib/hooks';
import { getAllProjects } from './get-all-projects';

const useAllProjectsQuery = (access_token, page, limit) => {
	const { addAlert } = useAlerts();

	const { data, isLoading, refetch } = useQuery({
		queryKey: ['projects', page, limit],
		retry: 0,
		queryFn: () => getAllProjects(access_token, page, limit),
		onError: (error) => {
			addAlert(error.message, '', 'danger');
		},
	});

	return {
		projects: data?.projects || [],
		totalPages: data?.totalPages || 0,
		isLoading,
		refetch,
	};
};
export default useAllProjectsQuery;
