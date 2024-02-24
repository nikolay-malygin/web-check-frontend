import { useAllProjectsQuery } from 'entities/project/api';
import { useUserData } from 'entities/user/lib/hooks';
import { useState } from 'react';
import { getAccessToken } from 'shared/lib/helpers';

const useProjectsPage = () => {
	const { user } = useUserData();
	const [currentPage, setCurrentPage] = useState(1);
	const { projects, totalPages, isLoading, refetch } = useAllProjectsQuery(
		getAccessToken(),
		currentPage,
		user.settings.record_num
	);

	return {
		projects,
		totalPages,
		currentPage,
		refetch,
		setCurrentPage,
		isLoading,
	};
};

export default useProjectsPage;
