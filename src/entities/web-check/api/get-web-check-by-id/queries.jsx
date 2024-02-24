import { useQuery } from 'react-query';
import { useAlerts } from 'shared/lib/hooks';
import { getWebCheckById } from './get-web-check-by-id';

const useWebCheckByIdQuery = (webCheckId, access_token) => {
	const { addAlert } = useAlerts();

	const { data: webCheckData, isLoading } = useQuery({
		queryKey: ['webCheck', webCheckId],
		retry: 0,
		queryFn: () => getWebCheckById(webCheckId, access_token),
		onError: (error) => {
			addAlert(error.message, '', 'danger');
		},
	});

	return {
		webCheckData,
		isLoading,
	};
};

export default useWebCheckByIdQuery;
