import { useQuery } from 'react-query';
import { useAlerts } from 'shared/lib/hooks';
import { getAllWebChecks } from './get-all-web-checks';

const useAllWebChecksQuery = (access_token, page, limit) => {
	const { addAlert } = useAlerts();

	const { data, isLoading, refetch } = useQuery({
		queryKey: ['webChecks', page, limit],
		retry: 0,
		queryFn: () => getAllWebChecks(access_token, page, limit),
		onError: (error) => {
			addAlert(error.message, '', 'danger');
		},
	});

	return {
		webChecks: data?.webChecks || [],
		totalPages: data?.totalPages || 0,
		isLoading,
		refetch,
	};
};

export default useAllWebChecksQuery;
