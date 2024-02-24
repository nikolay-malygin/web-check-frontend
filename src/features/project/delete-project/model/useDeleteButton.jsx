import { getAccessToken } from 'shared/lib/helpers';
import { useDeleteProjectMutation } from '../api/queries';

export const useDeleteButton = (projectId) => {
	const deleteProjectMutation = useDeleteProjectMutation();

	const handleDeleteProject = async (e) => {
		try {
			await deleteProjectMutation.mutateAsync({
				projectId,
				access_token: getAccessToken(),
			});
		} catch (error) {}
	};

	return {
		handleDeleteProject,
	};
};
