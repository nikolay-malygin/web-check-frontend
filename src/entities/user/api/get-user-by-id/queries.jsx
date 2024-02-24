import { useQuery } from 'react-query';
import { useAlerts } from 'shared/lib/hooks';
import { getUserById } from './get-user-by-id';

const useUserByIdQuery = (userId, access_token) => {
	const { addAlert } = useAlerts();

	const { data: userData, isLoading } = useQuery({
		queryKey: ['user', userId],
		retry: 0,
		queryFn: () => getUserById(userId, access_token),
		onError: (error) => {
			addAlert(error.message, '', 'danger');
		},
	});

	return {
		userData,
		isLoading,
	};
};

export default useUserByIdQuery;
