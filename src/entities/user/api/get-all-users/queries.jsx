import { useQuery } from 'react-query';
import { useAlerts } from 'shared/lib/hooks';
import { getAllUsers } from './get-all-users';

const useAllUsersQuery = (access_token, page, limit) => {
	const { addAlert } = useAlerts();

	const { data, isLoading, refetch } = useQuery({
		queryKey: ['users', page, limit],
		retry: 0,
		queryFn: () => getAllUsers(access_token, page, limit),
		onError: (error) => {
			addAlert(error.message, '', 'danger');
		},
	});

	return {
		users: data?.users || [],
		totalPages: data?.totalPages || 0,
		isLoading,
		refetch,
	};
};
export default useAllUsersQuery;
