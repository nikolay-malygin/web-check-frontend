import { useAllUsersQuery } from 'entities/user/api';
import { useUserData } from 'entities/user/lib/hooks';
import { useState } from 'react';
import { getAccessToken } from 'shared/lib/helpers';

const useUsersPage = () => {
	const { user } = useUserData();
	const [currentPage, setCurrentPage] = useState(1);
	const { users, totalPages, isLoading, refetch } = useAllUsersQuery(
		getAccessToken(),
		currentPage,
		user.settings.record_num
	);

	return {
		users,
		totalPages,
		currentPage,
		refetch,
		setCurrentPage,
		isLoading,
	};
};

export default useUsersPage;
