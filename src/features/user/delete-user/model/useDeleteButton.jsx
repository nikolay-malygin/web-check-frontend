import { getAccessToken } from 'shared/lib/helpers';
import { useDeleteUserMutation } from '../api/queries';

export const useDeleteButton = (userId) => {
	const deleteUserMutation = useDeleteUserMutation();

	const handleDeleteUser = async (e) => {
		try {
			await deleteUserMutation.mutateAsync({
				userId,
				access_token: getAccessToken(),
			});
		} catch (error) {}
	};

	return {
		handleDeleteUser,
	};
};
