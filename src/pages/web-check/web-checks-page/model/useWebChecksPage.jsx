import { useUserData } from 'entities/user/lib/hooks';
import { useAllWebChecksQuery } from 'entities/web-check/api';
import { useState } from 'react';
import { getAccessToken } from 'shared/lib/helpers';

const useWebChecksPage = () => {
	const { user } = useUserData();
	const [currentPage, setCurrentPage] = useState(1);
	const { webChecks, totalPages, isLoading, refetch } = useAllWebChecksQuery(
		getAccessToken(),
		currentPage,
		user.settings.record_num
	);

	return {
		webChecks,
		totalPages,
		currentPage,
		refetch,
		setCurrentPage,
		isLoading,
	};
};

export default useWebChecksPage;
